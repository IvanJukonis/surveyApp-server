const Investigators = require('../models/Relevador');

const getInvestigators = async (req, res) => {
  try {
    const investigators = await Investigators.find();

    if (investigators.length > 0) {
      return res.status(200).json({
        message: 'Investigators list',
        data: investigators,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No investigators found',
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

const getInvestigatorById = async (req, res) => {
  const { id } = req.params;
  try {
    const investigators = await Investigators.findById(id);
    if (investigators) {
      res.status(200).json({
        message: 'Investigator found',
        data: investigators,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Investigator not found',
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

const createInvestigator = async (req, res) => {
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
    const investigators = await Investigators.create({
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
      message: 'Investigator created',
      data: investigators,
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

const updateInvestigator = async (req, res) => {
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
    const investigators = await Investigators.findByIdAndUpdate(
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

    if (investigators) {
      res.status(201).json({
        message: 'Investigator updated',
        data: investigators,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Investigator not found',
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

const deleteInvestigator = async (req, res) => {
  const { id } = req.params;
  try {
    const investigators = await Investigators.findByIdAndDelete(id);
    if (investigators) {
      res.status(200).json({
        message: `Investigator ${id} deleted`,
        data: investigators,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Investigator not found',
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
  getInvestigators,
  getInvestigatorById,
  createInvestigator,
  updateInvestigator,
  deleteInvestigator,
};
