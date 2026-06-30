import asyncHandler from "../utils/asyncHandler.js";
import * as authService from "../services/auth.service.js";
import { registerSchema } from "../validators/auth.validator.js";
import { loginSchema } from "../validators/auth.validator.js";
import ApiResponse from "../utils/ApiResponse.js";

export const register = asyncHandler(async (req, res) => {
     console.log("✅ Register Controller Hit");

    const data = registerSchema.parse(req.body);

    const response = await authService.register(data);

    return res.status(201).json(response);
});

export const login = asyncHandler(async (req, res) => {

    const data = loginSchema.parse(req.body);

    const { user, token } = await authService.login(data);

    res
        .cookie("accessToken", token, {
            httpOnly: true,
            secure: false, // true in production
            sameSite: "lax"
        })
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "Login Successful"
            )
        );

});
export const getCurrentUser=asyncHandler(async(req,res)=>{
    const user=await authService.getCurrentUser(req.user.id);
    return res.status(200).json(
        new ApiResponse(
            200,user,"User fetched successfully"
        )
    );
});