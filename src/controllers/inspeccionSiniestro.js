const InspeccionSiniestros = require('../models/InspeccionSiniestro');

const getInspeccionSiniestro = async (req, res) => {
  try {
    const inspeccionSiniestros = await InspeccionSiniestros.find();

    if (inspeccionSiniestros.length > 0) {
      return res.status(200).json({
        message: 'InspeccionSiniestros list',
        data: inspeccionSiniestros,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No inspeccionSiniestros found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const getInspeccionSiniestroById = async (req, res) => {
  const { id } = req.params;
  try {
    const inspeccionSiniestros = await InspeccionSiniestros.findById(id);
    if (inspeccionSiniestros) {
      res.status(200).json({
        message: 'InspeccionSiniestro found',
        data: inspeccionSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionSiniestro not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const createInspeccionSiniestro = async (req, res) => {
  const {
    firstName,
    lastName,
    dni,
    email,
    dBirthday,
    dHire,
    address,
    city,
    phone,
    contract,
    hWork,
    salary,
    salaryUpdate,
    dSalaryUpdate,
    socialSecurity,
    office,
    department,
    position,
    children,
    maritalStatus,
    isActive,
    bankAccount,
    password,
    repeatPassword,
    promedioDiasSiniestro,
    promedioFaltasSiniestro,
    indiceProlijidad,
    indiceDesarrollo,
    siniestrosMensuales,
    siniestrosAnuales,
  } = req.body;

  try {
    const inspeccionSiniestros = await InspeccionSiniestros.create({
      firstName,
      lastName,
      dni,
      email,
      dBirthday,
      dHire,
      address,
      city,
      phone,
      contract,
      hWork,
      salary,
      salaryUpdate,
      dSalaryUpdate,
      socialSecurity,
      office,
      department,
      position,
      children,
      maritalStatus,
      isActive,
      bankAccount,
      password,
      repeatPassword,
      promedioDiasSiniestro,
      promedioFaltasSiniestro,
      indiceProlijidad,
      indiceDesarrollo,
      siniestrosMensuales,
      siniestrosAnuales,
    });

    res.status(201).json({
      message: 'InspeccionSiniestro created',
      data: inspeccionSiniestros,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateInspeccionSiniestro = async (req, res) => {
  const { id } = req.params;

  const {
    firstName,
    lastName,
    dni,
    email,
    dBirthday,
    dHire,
    address,
    city,
    phone,
    contract,
    hWork,
    salary,
    salaryUpdate,
    dSalaryUpdate,
    socialSecurity,
    office,
    department,
    position,
    children,
    maritalStatus,
    isActive,
    bankAccount,
    password,
    repeatPassword,
    promedioDiasSiniestro,
    promedioFaltasSiniestro,
    indiceProlijidad,
    indiceDesarrollo,
    siniestrosMensuales,
    siniestrosAnuales,
  } = req.body;

  try {
    const inspeccionSiniestros = await InspeccionSiniestros.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        dni,
        email,
        dBirthday,
        dHire,
        address,
        city,
        phone,
        contract,
        hWork,
        salary,
        salaryUpdate,
        dSalaryUpdate,
        socialSecurity,
        office,
        department,
        position,
        children,
        maritalStatus,
        isActive,
        bankAccount,
        password,
        repeatPassword,
        promedioDiasSiniestro,
        promedioFaltasSiniestro,
        indiceProlijidad,
        indiceDesarrollo,
        siniestrosMensuales,
        siniestrosAnuales,
      },
      { new: true },
    );

    if (inspeccionSiniestros) {
      res.status(201).json({
        message: 'InspeccionSiniestro updated',
        data: inspeccionSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionSiniestro not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const deleteInspeccionSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const inspeccionSiniestros = await InspeccionSiniestros.findByIdAndDelete(id);
    if (inspeccionSiniestros) {
      res.status(200).json({
        message: `InspeccionSiniestro ${id} deleted`,
        data: inspeccionSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionSiniestro not found',
        data: null,
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getInspeccionSiniestro,
  getInspeccionSiniestroById,
  createInspeccionSiniestro,
  updateInspeccionSiniestro,
  deleteInspeccionSiniestro,
};
