const Controladores = require('../models/Controlador');

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
    nombreUsuario,
    contraseña,
  } = req.body;

  try {
    const controladores = await Controladores.create({
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
      message: 'Controlador created',
      data: controladores,
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
    nombreUsuario,
    contraseña,
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
        nombreUsuario,
        contraseña,
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
    const controladores = await Controladores.findByIdAndDelete(id);
    if (controladores) {
      res.status(200).json({
        message: `Controlador ${id} deleted`,
        data: controladores,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Controlador not found',
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
  getControlador,
  getControladorById,
  postControlador,
  updateControlador,
  deleteControlador,
};
