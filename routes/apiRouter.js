import express from "express";
const router = express.Router();
import employees from "./employeeRoutes.js";

router.use("/api", employees);

export default router;
