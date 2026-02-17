import mongoose from "mongoose";
const connectDB = async () => {
    try {
    const URI = process.env.MongoDbURI;
    await mongoose.connect(URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;