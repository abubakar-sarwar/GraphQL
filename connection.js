import mongoose from "mongoose";

// Create Database Connection
const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("connected Successfully!!");
  } catch (err) {
    console.log("connection failed");
  }
};

export default connectToDatabase;
