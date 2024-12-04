import Department from "../models/Department.js";

const createDepartment = async (req, res) => {
  const { codeDepartment, nameDepartment } = req.body;
  try {
    const newDepartment = new Department({
      codeDepartment,
      nameDepartment,
    });
    await newDepartment.save();
    res.status(201).json({
      message: "Departamento creado con éxito",
      departamento: newDepartment,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el departamento", error });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departamentos = await Department.find();
    res.status(200).json(departamentos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los departamentos", error });
  }
};

const getDepartmentById = async (req, res) => {
  const { codeDepartment } = req.params;
  try {
    const departamento = await Department.findOne({
      codeDepartment: codeDepartment,
    });
    if (!departamento) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    res.status(200).json(departamento);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el departamento", error });
  }
};
const updateDepartment = async (req, res) => {
  const { codeDepartment } = req.params;
  const { nameDepartment } = req.body;
  try {
    const departamentoActualizado = await Department.findOneAndUpdate(
      { codeDepartment: codeDepartment },
      { nameDepartment },
      { new: true }
    );
    if (!departamentoActualizado) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    res.status(200).json({
      message: "Departamento actualizado con éxito",
      departamento: departamentoActualizado,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el departamento", error });
  }
};

const deleteDepartment = async (req, res) => {
  const { codeDepartment } = req.params;
  try {
    const departamentoEliminado = await Department.findOneAndDelete({
      codeDepartment: codeDepartment,
    });
    if (!departamentoEliminado) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    res.status(200).json({
      message: "Departamento eliminado con éxito",
      departamento: departamentoEliminado,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el departamento", error });
  }
};

export default {
  createDepartment: createDepartment,
  getDepartments: getDepartments,
  getDepartmentById: getDepartmentById,
  updateDepartment: updateDepartment,
  deleteDepartment: deleteDepartment,
};
