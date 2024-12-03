import Department from "../models/Department.js";

const createDepartment = async (req, res) => {
  const { codeDepartment, name } = req.body;
  try {
    const department = await Department.findOne({ codeDepartment });
    if (department) {
      return res
        .status(400)
        .json({ ok: false, msg: "El departamento ya existe" });
    }
    const newDepartment = new Department({
      codeDepartment: codeDepartment,
      name: name,
    });
    await newDepartment.save();
    return res.status(201).json({
      ok: true,
      msg: "Departamento creado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ ok: false, msg: "Error al crear departamento" });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ ok: true, departments });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, message: "Error al obtener departamentos" });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res
        .status(404)
        .json({ message: "No se encontro el departamento" });
    }
    return res.status(200).json({ ok: true, msg: "departamento encontrado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al obtener departamento" });
    console.log(err);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { id, name } = req.body;
    const department = await Department.findById(id);
    if (!department) {
      return res
        .status(404)
        .json({ ok: false, msg: "No se encontro el departamento" });
    }
    department.name = name || department.name;
    await department.save();
    return res.status(200).json({ ok: true, msg: "Departamento actualizado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al actualizar departamento" });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByIdAndDelete(id);
    if (!department) {
      return res
        .status(404)
        .json({ ok: false, msg: "No se encontro el departamento" });
    }
    await department.remove();
    return res.status(200).json({ ok: true, msg: "Departamento eliminado" });
  } catch (err) {
    return res
      .status(500)
      .json({ ok: false, msg: "Error al eliminar departamento" });
  }
};

export default {
  createDepartment: createDepartment,
  getDepartments: getDepartments,
  getDepartmentById: getDepartmentById,
  updateDepartment: updateDepartment,
  deleteDepartment: deleteDepartment,
};
