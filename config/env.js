const NODE_ENV = process.env.NODE_ENV || "development";

const env = {
    NODE_ENV,
    isDevelopment: NODE_ENV === "development",
    isProduction: NODE_ENV === "production",
    port: process.env.PORT || 5000,
    mongoUriDev: process.env.MONGO_URI_DEV
};

module.exports = env;