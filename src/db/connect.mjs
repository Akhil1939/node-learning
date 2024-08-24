import mongoose from "mongoose";

const uri = process.env.MONGO_URL
const connectDB = () => {
  return mongoose.connect(uri);
};

export { connectDB };
