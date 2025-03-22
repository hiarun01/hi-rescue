import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        await mongoose.connect(process.env.DB_STRING);
        console.log("MongoDB successfully connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        // Exit the process with a non-zero status code if the connection fails
        process.exit(1);
    }
};
