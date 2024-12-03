import express from "express";
import connectDB from "./db/config.js";
import cors from "cors";
import api from "./routes/apiRouter.js";
process.loadEnvFile();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/", api);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
