import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
