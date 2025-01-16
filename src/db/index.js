import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Assuming DB_NAME is defined elsewhere

const connectDB = async () => {
  try {
    // Make sure process.env.MONGODB_URI is correctly loaded and has the right value
    console.log("MongoDB URI: ", process.env.MONGODB_URI);  // Debugging log

    const mongoUri = `${process.env.MONGODB_URI}/${DB_NAME}`;
    const connectionInstance = await mongoose.connect(mongoUri);

    console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);  // Exit the process on connection failure
  }
};

export default connectDB;
