import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function connectDB() {
    try {
        await prisma.$connect();
        console.log(" Database Connected");
    } catch (error) {
        console.error(" Database Connection Failed");
        console.error(error);
        process.exit(1);
    }
}

export default prisma;