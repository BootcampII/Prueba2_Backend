import express from "express";
const router = express.Router();
import departmentControllers from "../controllers/departmentControllers.js";

router.get(
  "/getDepartmentById/:codeDepartment",
  departmentControllers.getDepartmentById
);
router.get("/getDepartments", departmentControllers.getDepartments);
router.post("/", departmentControllers.createDepartment);
router.patch("/:codeDepartment", departmentControllers.updateDepartment);
router.delete("/:codeDepartment", departmentControllers.deleteDepartment);

export default router;
