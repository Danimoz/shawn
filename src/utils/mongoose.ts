import mongoose from "mongoose";

async function connectDB() {
  try{
    const { connection } = await mongoose.connect(process.env.MONGODB_URI!);
    if (connection.readyState === 1) return Promise.resolve(true)
  } catch (error){
   return Promise.reject(error)
  }
}

export default connectDB;