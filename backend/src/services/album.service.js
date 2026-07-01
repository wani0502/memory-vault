import prisma from "../config/db.js";
import asyncHandler from "../utils/asyncHandler.js";
export const createAlbum = async (userId, data) => {

    return await prisma.album.create({
        data: {
            name: data.name,
            description: data.description,
            visibility: data.visibility,
            ownerId: userId
        }
    });

};
export const getAlbums = async (userId) => {

    return await prisma.album.findMany({

        where: {
            ownerId: userId,
            isDeleted: false
        },

        orderBy: {
            createdAt: "desc"
        },

        select: {
            id: true,
            name: true,
            description: true,
            visibility: true,
            coverImage: true,
            createdAt: true,
            updatedAt: true
        }

    });

};
import ApiError from "../utils/apiError.js";

export const getAlbum = async (userId, albumId) => {

    const album = await prisma.album.findFirst({

        where: {
            id: albumId,
            ownerId: userId,
            isDeleted: false
        },

        select: {
            id: true,
            name: true,
            description: true,
            visibility: true,
            coverImage: true,
            createdAt: true,
            updatedAt: true
        }

    });

    if (!album) {
        throw new ApiError(404, "Album not found");
    }

    return album;
};
export const updateAlbum = async (userId, albumId, data) => {

    const album = await prisma.album.findFirst({
        where: {
            id: albumId,
            ownerId: userId,
            isDeleted: false
        }
    });

    if (!album)
        throw new ApiError(404, "Album not found");

    return await prisma.album.update({
        where: {
            id: albumId
        },
        data,
        select: {
            id: true,
            name: true,
            description: true,
            visibility: true,
            updatedAt: true
        }
    });

};
export const deleteAlbum = async (userId, albumId) => {

    const album = await prisma.album.findFirst({
        where: {
            id: albumId,
            ownerId: userId,
            isDeleted: false
        }
    });

    if (!album)
        throw new ApiError(404, "Album not found");

    await prisma.album.update({
        where: {
            id: albumId
        },
        data: {
            isDeleted: true
        }
    });

};