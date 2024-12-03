import express from "express";
const router = express.Router();
import employeeControllers from "../controllers/employeeControllers.js";

router.get("/getEmployees", employeeControllers.getEmployees);
router.get("/getEmployeeById/:id", employeeControllers.getEmployeeById);
router.post("/createEmployee", employeeControllers.createEmployee);
router.patch("/updateEmployee/:id", employeeControllers.updateEmployee);
router.delete("/deleteEmployee/:id", employeeControllers.deleteEmployee);

export default router;
