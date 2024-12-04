import express from "express";
const router = express.Router();
import employees from "./employeeRoutes.js";
import department from "./departmentRoutes.js";

router.use("/employees", employees);
router.use("/department", department);

export default router;
