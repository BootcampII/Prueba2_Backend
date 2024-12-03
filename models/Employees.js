import mongoose from "mongoose";
import Department from "./Department.js";

const EmployeesSchema = new mongoose.Schema({
  codeEmployee: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName1: {
    type: String,
    required: true,
  },
  lastName2: {
    type: String,
    required: true,
  },
  code_department: {
    type: Number,
    required: true,
    ref: "Department",
  },
});

const Employees = mongoose.model("Employees", EmployeesSchema);

export default Employees;
