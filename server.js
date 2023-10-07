import express from 'express';
import path from 'path';
import 'dotenv/config';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(process.env);
console.log(process.env.MAP_KEY);

const app = express();
let port = process.env.PORT;

if (port == null || port == "") {
    port = "8000";
}

app.use(express.static(join(__dirname, 'dist')));

app.get('/api/mapkey', (req, res) => {
    console.log("I'm in the route");
    const mapKey = process.env.MAP_KEY;
    res.json({ mapKey });
});

app.get('/api/locations', (req, res) => {
    console.log("found the locations");
    const locations = "honk"
    res.json({ locations });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`I'm here on port ${port}`);
});
