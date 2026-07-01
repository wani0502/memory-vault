import express from "express";

import verifyJWT from "../../middleware/auth.middleware.js";
import upload from "../../middleware/upload.middleware.js";

import {
    uploadPhoto,
    getAlbumPhotos,
    getPhoto,
    deletePhoto
} from "../../controllers/photo.controller.js";

const router = express.Router();

router.post(
    "/:albumId",
    verifyJWT,
    upload.single("photo"),
    uploadPhoto
);

router.get("/:albumId", verifyJWT, getAlbumPhotos);

router.get("/single/:photoId", verifyJWT, getPhoto);

router.delete("/:photoId", verifyJWT, deletePhoto);

export default router;