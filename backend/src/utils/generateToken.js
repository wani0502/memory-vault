import jwt from "jsonwebtoken";
const generateToken = (payload)=>{
    console.log("verify jwt secret",process.env.JWT_SECRET);
    return jwt.sign(
        payload,process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES
        }
    );
};
export default generateToken;
