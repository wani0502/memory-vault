import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
    createAlbumSchema,
    updateAlbumSchema
} from "../validators/album.validator.js";
import * as albumService from "../services/album.service.js";


export const createAlbum = asyncHandler(async (req, res) => {

    const data = createAlbumSchema.parse(req.body);

    const album = await albumService.createAlbum(
        req.user.id,
        data
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            album,
            "Album created successfully"
        )
    );

});
export const getAlbums = asyncHandler(async (req, res) => {

    const albums = await albumService.getAlbums(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            albums,
            "Albums fetched successfully"
        )
    );

});
export const getAlbum = asyncHandler(async (req, res) => {

    const album = await albumService.getAlbum(
        req.user.id,
        req.params.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            album,
            "Album fetched successfully"
        )
    );

});
export const updateAlbum = asyncHandler(async (req, res) => {

    const data = updateAlbumSchema.parse(req.body);

    const album = await albumService.updateAlbum(
        req.user.id,
        req.params.id,
        data
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            album,
            "Album updated successfully"
        )
    );

});
export const deleteAlbum = asyncHandler(async (req, res) => {

    await albumService.deleteAlbum(
        req.user.id,
        req.params.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Album deleted successfully"
        )
    );

});