import Department from "../models/Department.js";
import Employees from "../models/Employees.js";

const createEmployee = async (req, res) => {
  const { codeEmployee, name, lastName1, lastName2, codeDepartment } = req.body;
  try {
    const employee = await Employees.findOne({ codeEmployee });
    if (employee) {
      return res.status(400).json({ ok: false, msg: "El empleado ya existe" });
    }

    const departement = await Department.findOne({ codeDepartment });
    if (!departement) {
      return res
        .status(400)
        .json({ ok: false, msg: "El departamento no existe" });
    }
    const newEmployee = new Employees({
      codeEmployee: codeEmployee,
      name: name,
      lastName1: lastName1,
      lastName2: lastName2,
      codeDepartment: departement._id,
    });
    await newEmployee.save();
    return res.status(201).json({
      ok: true,
      msg: "Empleado creado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ ok: false, msg: "Error al crear empleado" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find().populate({
      path: "codeDepartment",
      select: "nameDepartment codeDepartment",
    });
    return res.status(200).json({ ok: true, employees });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, message: "Error al obtener empleados" });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "No se encontro el empleado" });
    }
    return res.status(200).json({ ok: true, msg: "empleado encontrado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al obtener empleado" });
    console.log(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id, name, lastName1, lastName2, codeDepartment } = req.body;
    const employee = await Employees.findById(id);
    if (!employee) {
      return res
        .status(404)
        .json({ ok: false, msg: "No se encontro el empleado" });
    }
    employee.name = name || employee.name;
    employee.lastName1 = lastName1 || employee.lastName1;
    employee.lastName2 = lastName2 || employee.lastName2;
    employee.codeDepartment = codeDepartment || employee.codeDepartment;
    await employee.save();
    return res.status(200).json({ ok: true, msg: "Empleado actualizado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al actualizar empleado" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employees.findByIdAndDelete(id);
    if (!employee) {
      return res
        .status(404)
        .json({ ok: false, msg: "No se encontro el empleado" });
    }
    await employee.remove();
    return res.status(200).json({ ok: true, msg: "Empleado eliminado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al eliminar empleado" });
  }
};

export default {
  createEmployee: createEmployee,
  getEmployees: getEmployees,
  getEmployeeById: getEmployeeById,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
};
