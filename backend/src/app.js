import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/v1/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import albumRoutes from "./routes/v1/album.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Memory Vault API ",
  });
});


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/albums", albumRoutes);
app.use("/api/v1/photos", photoRoutes);

app.use(errorHandler);//this should always be the last middleware

export default app;