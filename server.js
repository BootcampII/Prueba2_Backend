import express from "express";
import cors from "cors";
import api from "./routes/api.js";
process.loadEnvFile();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", api);

module.exports = app;
