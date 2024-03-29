import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
let port = process.env.PORT;

if (port == null || port == "") {
    port = "3000";
}

// CORS IS FOR DEV ONLY, RESEARCH SECURITY BEFORE MAKING SITE LIVE
const corsOptions = {
    origin: 'http://localhost:8000',
}

app.use(express.static(join(__dirname, 'dist')));

app.get('/api/mapkey', cors({corsOptions}), (req, res) => {
    const mapKey = process.env.MAP_KEY;
    res.json({ mapKey });
});

app.get('/api/spots', cors({corsOptions}), async (req, res) => {
    console.log("found the spots");
    const spots = await prisma.spot.findMany();
    res.json({ spots });
});

app.get('*', (req, res) => {
    res.sendFile("./index.html");
});


// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.listen(port, () => {
    console.log(`I'm here on port ${port}`);
    console.log("Did you know that I love you?");
});
