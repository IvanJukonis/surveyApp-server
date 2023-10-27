const investigators = require('../models/Investigator');

const getInvestigators = (req, res) => {
  investigators.find()
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'All investigators',
          data,
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const getInvestigatorById = (req, res) => {
  const { id } = req.params;

  investigators.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'Investigator Found',
          data,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Investigator not found',
          error: true,
        });
      }
    })
    .catch((error) => {
      res.status(400).json({
        message: 'An error ocurred',
        error: error.msg,
      });
    });
};
const updateInvestigator = (req, res) => {
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

  investigators.findByIdAndUpdate(
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
  )
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: 'Investigator Updated',
          result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Investigator not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

const deleteInvestigator = (req, res) => {
  const { id } = req.params;
  investigators.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: `Investigator ${id} deleted`,
          data: result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Investigator not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Error in the request',
      error,
    }));
};

const createInvestigator = (req, res) => {
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

  investigators.create({
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
  })
    .then((data) => {
      res.status(201).json({
        message: 'Investigator created',
        data,
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error ocurred',
        error,
      });
    });
};

module.exports = {
  getInvestigators,
  getInvestigatorById,
  createInvestigator,
  updateInvestigator,
  deleteInvestigator,
};
