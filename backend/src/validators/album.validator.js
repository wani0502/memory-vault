import { z } from "zod";

export const createAlbumSchema = z.object({
    name: z.string().trim().min(3).max(100),

    description: z.string().max(500).optional(),

    visibility: z
        .enum(["PRIVATE", "PUBLIC", "UNLISTED"])
        .default("PRIVATE")
});