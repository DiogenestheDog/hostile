const express = require('express');
const path = require('path');
require('dotenv').config()
console.log(process.env)

console.log(process.env.MAP_KEY);
const app = express();
let port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/mapkey', (req, res) => {
    console.log("I'm in the route");
    const mapKey = process.env.MAP_KEY;
    res.json({mapKey});
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`I'm here on port ${port}`);
});