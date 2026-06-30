import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.js";

const verifyJWT =( req , res, next)=>{
    const token =
    req.cookies.accessToken || req.header("Authorization")?.replace("Bearer","");

    if(!token){
        return next(new ApiError(401,"Unauthorized"));
    }
    try{
        const decoded=jwt.verify(
            token,process.env.JWT_SECRET_KEY
        );
        req.user=decoded;
        next();

    }catch(error){
        next(new ApiError(401,"Invalid Token"));
    }
};
export default verifyJWT;