import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string) // connect to MongoDB
        console.log("connected to MongoDB")
    } catch (error) {
        console.error("error connecting to MongoDB", error);
        process.exit(1);
    }
};

export default connectDB;