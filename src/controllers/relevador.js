const Relevadores = require('../models/Relevador');
const firebaseApp = require('../helper/firebase/firebase-config');

const getRelevador = async (req, res) => {
  try {
    const relevadores = await Relevadores.find();

    if (relevadores.length > 0) {
      return res.status(200).json({
        message: 'Relevadores list',
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const getRelevadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const relevadores = await Relevadores.findById(id);
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
    res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const postRelevador = async (req, res) => {
  const {
    tipo,
    nombre,
    apellido,
    email,
    dni,
    fechaNacimiento,
    fechaContratacion,
    direccion,
    localidad,
    telefono,
    contrato,
    hsLaborales,
    salario,
    fechaActualizacionSalario,
    numeroSeguridadSocial,
    oficina,
    departamento,
    puesto,
    cantidadHijos,
    estadoCivil,
    activo,
    cuentaBancaria,
  } = req.body;

  let firebaseUid;

  try {
    const existingRelevador = await Relevadores.findOne({ email });
    const existingDNIRelevador = await Relevadores.findOne({ dni });

    if (existingRelevador) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }

    if (existingDNIRelevador) {
      return res.status(400).json({
        message: 'This DNI is registered',
        data: null,
        error: true,
      });
    }

    const newFirebaseUser = await firebaseApp.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });

    firebaseUid = newFirebaseUser.uid;

    await firebaseApp.auth().setCustomUserClaims(newFirebaseUser.uid, { role: 'RELEVADOR' });

    const result = await Relevadores.create({
      firebaseUid,
      tipo,
      nombre,
      apellido,
      email,
      dni,
      fechaNacimiento,
      fechaContratacion,
      direccion,
      localidad,
      telefono,
      contrato,
      hsLaborales,
      salario,
      fechaActualizacionSalario,
      numeroSeguridadSocial,
      oficina,
      departamento,
      puesto,
      cantidadHijos,
      estadoCivil,
      activo,
      cuentaBancaria,
    });

    return res.status(201).json({
      message: 'Relevador created',
      data: result,
      error: false,
    });
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error collection')) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateRelevador = async (req, res) => {
  const { id } = req.params;

  const {
    tipo,
    nombre,
    apellido,
    email,
    dni,
    fechaNacimiento,
    fechaContratacion,
    direccion,
    localidad,
    telefono,
    contrato,
    hsLaborales,
    salario,
    fechaActualizacionSalario,
    numeroSeguridadSocial,
    oficina,
    departamento,
    puesto,
    cantidadHijos,
    estadoCivil,
    activo,
    cuentaBancaria,
  } = req.body;

  try {
    const relevadores = await Relevadores.findByIdAndUpdate(
      id,
      {
        tipo,
        nombre,
        apellido,
        email,
        dni,
        fechaNacimiento,
        fechaContratacion,
        direccion,
        localidad,
        telefono,
        contrato,
        hsLaborales,
        salario,
        fechaActualizacionSalario,
        numeroSeguridadSocial,
        oficina,
        departamento,
        puesto,
        cantidadHijos,
        estadoCivil,
        activo,
        cuentaBancaria,
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const deleteRelevador = async (req, res) => {
  const { id } = req.params;
  try {
    const relevadores = await Relevadores.findByIdAndDelete(id);
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getRelevador,
  getRelevadorById,
  postRelevador,
  updateRelevador,
  deleteRelevador,
};
