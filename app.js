const express = require("express");
const cors = require("cors");
const fs = require('fs');
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

const routePath = path.join(__dirname, './routers');
fs.readdirSync(routePath).forEach((file) => {
    if (file.endsWith(".js")) {
        const route = require(path.join(routePath, file));
        app.use("/api",route);
    }
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "ok!"
    })
});

module.exports = app;