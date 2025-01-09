const mongoose = require("mongoose");

async function dbConnect() {
    if (mongoose.connection.readyState) {
        console.log('Already connected to database');
        return;
    }

    if (!process.env.MONGO_URI) {
        console.log('MongoDB uri not geted');
        return 
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = dbConnect;
