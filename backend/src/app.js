import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/v1/auth.routes.js";
import errorHandler from "./middlewares/errorHandler.js";


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);//this should always be the last middleware



// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Memory Vault API ",
  });
});


app.use("/api/v1/auth", authRoutes);



export default app;