const { default: mongoose } = require("mongoose");
const env = require("./env");


async function connectDB() {
    let mongoUri;
    if (env.isDevelopment) {
        mongoUri = env.mongoUriDev;
    } else {
        throw new Error("Production database is not configured")
    }
    if (!mongoUri) {
        throw new Error("MONGO DB is missing")
    }

    mongoose.set("strictQuery" = true);

    await mongoose.connect(mongoUri);

    console.log(`Connected Mongo Database is ${env.NODE_ENV}`);
    console.log("Current Database: ", mongoUri);
};

module.exports = connectDB;