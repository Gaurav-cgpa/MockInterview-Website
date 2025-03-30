import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connected");
    } catch (error) {
        console.log("Error in db-connect.js",error);
        process.exit(1);
    }
};

export default connectDB;