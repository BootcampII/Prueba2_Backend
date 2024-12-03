import mongoose from "mongoose";
process.loadEnvFile();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
