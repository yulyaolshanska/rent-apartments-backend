import mongoose from "mongoose";
require("dotenv").config();

const mongoURI: string = process.env.MONGODB_URI || "";

if (!mongoURI) {
  console.error("MongoDB URI is not provided in the environment variable.");
  process.exit(1);
}
export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as Parameters<typeof mongoose.connect>[1]);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", (error as Error).message);
  }
};
