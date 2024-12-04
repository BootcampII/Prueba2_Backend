import express from "express";
const router = express.Router();
import departmentControllers from "../controllers/departmentControllers.js";

router.get("/:codeDepartment", departmentControllers.getDepartmentById);
router.get("/", departmentControllers.getDepartments);
router.post("/", departmentControllers.createDepartment);
router.patch("/:codeDepartment", departmentControllers.updateDepartment);
router.delete("/:codeDepartment", departmentControllers.deleteDepartment);

export default router;
