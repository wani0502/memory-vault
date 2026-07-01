import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import * as photoService from "../services/photo.service.js";

export const uploadPhoto = asyncHandler(async (req, res) => {

    const photo = await photoService.uploadPhoto(
        req.user.id,
        req.params.albumId,
        req.file
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            photo,
            "Photo uploaded successfully"
        )
    );
});

export const getAlbumPhotos = asyncHandler(async (req, res) => {

    const photos = await photoService.getAlbumPhotos(
        req.user.id,
        req.params.albumId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            photos,
            "Photos fetched successfully"
        )
    );
});

export const getPhoto = asyncHandler(async (req, res) => {

    const photo = await photoService.getPhoto(
        req.user.id,
        req.params.photoId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            photo,
            "Photo fetched successfully"
        )
    );
});

export const deletePhoto = asyncHandler(async (req, res) => {

    await photoService.deletePhoto(
        req.user.id,
        req.params.photoId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Photo deleted successfully"
        )
    );
});