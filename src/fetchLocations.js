import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

const spots = await prisma.spot.findMany();
//const spots = await prisma.spot.findFirst();
console.log(spots);
process.exit();