import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  codeDepartment: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Department = mongoose.model("Department", DepartmentSchema);

export default Department;
