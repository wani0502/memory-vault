import bcrypt from "bcrypt";
import prisma from "../config/db.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import generateToken from "../utils/generateToken.js";

export const register = async (data) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });

    if (existingUser) {
        throw new ApiError(409, "User already exists with this email");
    }

    const hashedPassword = await bcrypt.hash(data.password,Number(process.env.SALT_ROUNDS));

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    });

    return new ApiResponse(
        201,
        user,
        "User registered successfully"
    );
};

export const  login = async(data)=>{
    const user=await prisma.user.findUnique({
        where:{
            email:data.email
        }
    })
    if(!user){
        throw new ApiError(404,"User not found")

    }

    const isPasswordCorrect= await bcrypt.compare(data.password,user.password);
    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid password")
 
    }

    const token=generateToken({id:user.id,email:user.email});
    return {
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role
        },
        token
    };
}

export const getCurrentUser=async(id)=>{
    const user=await prisma.user.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            name:true,
            email:true,
            role:true,
            createdAt:true
        }
    });
    if(!user)
        throw new ApiError(404,"User not found");
    return user;
}