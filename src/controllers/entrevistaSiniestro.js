const EntrevistaSiniestros = require('../models/EntrevistaSiniestro');

const getEntrevistaSiniestro = async (req, res) => {
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.find();

    if (entrevistaSiniestros.length > 0) {
      return res.status(200).json({
        message: 'EntrevistaSiniestros list',
        data: entrevistaSiniestros,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No entrevistaSiniestros found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const getEntrevistaSiniestroById = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.findById(id);
    if (entrevistaSiniestros) {
      res.status(200).json({
        message: 'EntrevistaSiniestro found',
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const postEntrevistaSiniestro = async (req, res) => {
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
    const entrevistaSiniestros = await EntrevistaSiniestros.create({
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
      message: 'EntrevistaSiniestro created',
      data: entrevistaSiniestros,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const updateEntrevistaSiniestro = async (req, res) => {
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
    const entrevistaSiniestros = await EntrevistaSiniestros.findByIdAndUpdate(
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

    if (entrevistaSiniestros) {
      res.status(201).json({
        message: 'EntrevistaSiniestro updated',
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const deleteEntrevistaSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.findByIdAndDelete(id);
    if (entrevistaSiniestros) {
      res.status(200).json({
        message: `EntrevistaSiniestro ${id} deleted`,
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
        data: null,
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getEntrevistaSiniestro,
  getEntrevistaSiniestroById,
  postEntrevistaSiniestro,
  updateEntrevistaSiniestro,
  deleteEntrevistaSiniestro,
};
