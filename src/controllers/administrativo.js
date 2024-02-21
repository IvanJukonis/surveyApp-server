const Administrativo = require('../models/Administrativos');
const firebaseApp = require('../helper/firebase/firebase-config');

const updateAdministrativo = async (req, res) => {
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
    const existingAdministrativo = await Administrativo.findOne({ _id: id });

    if (!existingAdministrativo) {
      return res.status(404).json({
        message: 'Administrativo not found',
        data: null,
        error: true,
      });
    }
    const { firebaseUid } = existingAdministrativo;

    await firebaseApp.auth().updateUser(firebaseUid, {
      email: req.body.email,
      password: req.body.password,
    });

    const result = await Administrativo.findByIdAndUpdate(id, {
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
    }, { new: true });

    if (!result) {
      return res.status(404).json({
        message: 'Administrativo not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Administrativo Updated',
      data: result,
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

const postAdministrativo = async (req, res) => {
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
    const existingAdministrativo = await Administrativo.findOne({ email });
    const existingDNIAdministrativo = await Administrativo.findOne({ dni });

    if (existingAdministrativo) {
      return res.status(400).json({
        message: 'Email already exists',
        data: null,
        error: true,
      });
    }

    if (existingDNIAdministrativo) {
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

    await firebaseApp.auth().setCustomUserClaims(newFirebaseUser.uid, { role: 'ADMINISTRATIVO' });

    const result = await Administrativo.create({
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
      message: 'Administrativo created',
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

const getAdministrativos = async (req, res) => {
  try {
    const result = await Administrativo.find();

    return res.status(200).json({
      message: 'Administrativos list',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'there is an error here',
      data: null,
      error,
    });
  }
};

const getAdministrativosById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Administrativo.findById(id);

    if (result) {
      return res.status(200).json({
        message: 'Administrativo found',
        data: result,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Administrativo not found',
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

const deleteAdministrativo = async (req, res) => {
  const { id } = req.params;
  try {
    const existingAdministrativo = await Administrativo.findOne({ _id: id });

    if (!existingAdministrativo) {
      return res.status(404).json({
        message: 'Administrativo not found',
        data: null,
        error: true,
      });
    }
    const { firebaseUid } = existingAdministrativo;

    await firebaseApp.auth().deleteUser(firebaseUid);

    const result = await Administrativo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: 'Administrativo not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Administrativo deleted',
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
  postAdministrativo,
  getAdministrativos,
  getAdministrativosById,
  updateAdministrativo,
  deleteAdministrativo,
};
