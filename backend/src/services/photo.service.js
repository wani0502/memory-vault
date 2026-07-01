import prisma from "../config/db.js";
import ApiError from "../utils/apiError.js";

export const uploadPhoto = async (userId, albumId, file) => {

    if (!file)
        throw new ApiError(400, "No file uploaded");

    const album = await prisma.album.findFirst({
        where: {
            id: albumId,
            ownerId: userId,
            isDeleted: false
        }
    });

    if (!album)
        throw new ApiError(404, "Album not found");

    const photo = await prisma.photo.create({

        data: {

            imageUrl: file.path,

            filename: file.filename,

            originalName: file.originalname,

            fileSize: file.size,

            mimeType: file.mimetype,

            albumId,

            uploadedBy: userId

        }

    });

    return photo;
};

export const getAlbumPhotos = async (userId, albumId) => {

    return await prisma.photo.findMany({

        where: {
            albumId,
            uploadedBy: userId,
            isDeleted: false
        },

        orderBy: {
            createdAt: "desc"
        }

    });

};

export const getPhoto = async (userId, photoId) => {

    const photo = await prisma.photo.findFirst({

        where: {
            id: photoId,
            uploadedBy: userId,
            isDeleted: false
        }

    });

    if (!photo)
        throw new ApiError(404, "Photo not found");

    return photo;
};

export const deletePhoto = async (userId, photoId) => {

    const photo = await prisma.photo.findFirst({

        where: {
            id: photoId,
            uploadedBy: userId,
            isDeleted: false
        }

    });

    if (!photo)
        throw new ApiError(404, "Photo not found");

    await prisma.photo.update({

        where: {
            id: photoId
        },

        data: {
            isDeleted: true
        }

    });

};