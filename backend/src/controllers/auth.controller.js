import asyncHandler from "../utils/asyncHandler.js";
import * as authService from "../services/auth.service.js";

export const register = asyncHandler(async (req, res) => {

    const response = await authService.register(req.body);

    return res.status(200).json(response);

});