const Relevadors = require('../models/Relevador');

const getRelevador = async (req, res) => {
  try {
    const relevadores = await Relevadors.find();

    if (relevadores.length > 0) {
      return res.status(200).json({
        message: 'Relevadors list',
        data: relevadores,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No relevadores found',
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

const getRelevadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const relevadores = await Relevadors.findById(id);
    if (relevadores) {
      res.status(200).json({
        message: 'Relevador found',
        data: relevadores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Relevador not found',
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

const createRelevador = async (req, res) => {
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
    const relevadores = await Relevadors.create({
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
      message: 'Relevador created',
      data: relevadores,
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

const updateRelevador = async (req, res) => {
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
    const relevadores = await Relevadors.findByIdAndUpdate(
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

    if (relevadores) {
      res.status(201).json({
        message: 'Relevador updated',
        data: relevadores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Relevador not found',
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

const deleteRelevador = async (req, res) => {
  const { id } = req.params;
  try {
    const relevadores = await Relevadors.findByIdAndDelete(id);
    if (relevadores) {
      res.status(200).json({
        message: `Relevador ${id} deleted`,
        data: relevadores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Relevador not found',
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
  getRelevador,
  getRelevadorById,
  createRelevador,
  updateRelevador,
  deleteRelevador,
};
