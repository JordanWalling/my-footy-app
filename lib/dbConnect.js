import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default dbConnect;
