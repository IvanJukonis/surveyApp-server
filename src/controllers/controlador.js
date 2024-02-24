const Controladores = require('../models/Controlador');
const firebaseApp = require('../helper/firebase/firebase-config');

const getControlador = async (req, res) => {
  try {
    const controladores = await Controladores.find();

    if (controladores.length > 0) {
      return res.status(200).json({
        message: 'Controladores list',
        data: controladores,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No controladores found',
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

const getControladorById = async (req, res) => {
  const { id } = req.params;
  try {
    const controladores = await Controladores.findById(id);
    if (controladores) {
      res.status(200).json({
        message: 'Controlador found',
        data: controladores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Controlador not found',
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

const postControlador = async (req, res) => {
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
    const existingControlador = await Controladores.findOne({ email });
    const existingDNIControlador = await Controladores.findOne({ dni });

    if (existingControlador) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }

    if (existingDNIControlador) {
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

    await firebaseApp.auth().setCustomUserClaims(newFirebaseUser.uid, { role: 'CONTROLADOR' });

    const result = await Controladores.create({
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
      message: 'Controlador created',
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

const updateControlador = async (req, res) => {
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
    const controladores = await Controladores.findByIdAndUpdate(
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

    if (controladores) {
      res.status(201).json({
        message: 'Controlador updated',
        data: controladores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Controlador not found',
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

const deleteControlador = async (req, res) => {
  const { id } = req.params;
  try {
    const existingControlador = await Controladores.findOne({ _id: id });

    if (!existingControlador) {
      return res.status(404).json({
        message: 'Controlador not found',
        data: null,
        error: true,
      });
    }
    const { firebaseUid } = existingControlador;

    await firebaseApp.auth().deleteUser(firebaseUid);

    const result = await Controladores.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: 'Controlador not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Controlador deleted',
      data: null,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getControlador,
  getControladorById,
  postControlador,
  updateControlador,
  deleteControlador,
};
