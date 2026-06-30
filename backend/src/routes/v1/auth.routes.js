import express from "express";
import { register } from "../../controllers/auth.controller.js";
import { login } from "../../controllers/auth.controller.js";
import verifyJWT from "../../middleware/auth.middleware.js";
import {getCurrentUser} from "../../controllers/auth.controller.js"

const router = express.Router();

router.post("/register", register);
router.post("/login",login)
router.get("/me",verifyJWT,getCurrentUser);
export default router;