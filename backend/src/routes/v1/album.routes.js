import express from "express";
import verifyJWT from "../../middleware/auth.middleware.js";
import {
    createAlbum,
    getAlbums,
    getAlbum,
    updateAlbum,
    deleteAlbum
} from "../../controllers/album.controller.js";

const router = express.Router();

router.post("/", verifyJWT, createAlbum);
router.get("/", verifyJWT, getAlbums);
router.get("/:id", verifyJWT, getAlbum);
router.patch("/:id", verifyJWT, updateAlbum);
router.delete("/:id", verifyJWT, deleteAlbum);

export default router;