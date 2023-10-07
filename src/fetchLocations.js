import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

const locations = await prisma.spot.findMany();
