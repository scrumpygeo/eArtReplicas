import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host} 👍`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)  // exit with error
  }
}

export default connectDB