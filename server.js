require("dotenv").config();
const http = require("http");
const app = require('./app');
const env = require("./config/env");
const config = require("./config");
async function startServer() {
    try {
        await connectDB();
        const server = http.createServer(app);
        server.listen(env.port, () => {
            console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${env.port}`);
        });
    } catch(err) {
        console.error("Server setup fail: ", err.message);
        process.exit(1);
    }
};