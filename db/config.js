import mongoose from "mongoose";
process.loadEnvFile();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
