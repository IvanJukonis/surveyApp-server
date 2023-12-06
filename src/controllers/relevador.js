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
      message: 'Internal Server Error',
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
    res.status(500).json({
      message: 'Internal Server Error',
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
    nombreUsuario,
    contraseña,
  } = req.body;

  try {
    const relevadores = await Relevadors.create({
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
      nombreUsuario,
      contraseña,
    });

    res.status(201).json({
      message: 'Relevador created',
      data: relevadores,
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
    nombreUsuario,
    contraseña,
  } = req.body;

  try {
    const relevadores = await Relevadors.findByIdAndUpdate(
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
        nombreUsuario,
        contraseña,
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
