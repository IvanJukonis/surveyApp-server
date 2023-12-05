const Involucrado = require('../models/Involucrado');

const getInvolucrado = async (req, res) => {
  try {
    const involucrado = await Involucrado.find();

    if (involucrado.length > 0) {
      return res.status(200).json({
        message: 'Involucrados list',
        data: involucrado,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No Involucrados found',
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

const getInvolucradoById = async (req, res) => {
  const { id } = req.params;
  try {
    const involucrado = await Involucrado.findById(id);
    if (involucrado) {
      res.status(200).json({
        message: 'Involucrado Found',
        data: involucrado,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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

const postInvolucrado = async (req, res) => {
  const {
    nombre,
    apellido,
    DNI,
    telefono,
    email,
    ciudad,
    tipo,
    lesiones,
    dañosInvolucrado,
    fechaDeNacimiento,
    direccion,
    aportaDNI,
    aportaLC,
    aportaDoc,
    aportaLesiones,
    aportaGastos,
    pais,
  } = req.body;
  try {
    const involucrado = await Involucrado.create({
      nombre,
      apellido,
      DNI,
      telefono,
      email,
      ciudad,
      tipo,
      lesiones,
      dañosInvolucrado,
      fechaDeNacimiento,
      direccion,
      aportaDNI,
      aportaLC,
      aportaDoc,
      aportaLesiones,
      aportaGastos,
      pais,
    });

    res.status(201).json({
      message: 'Involucrado created',
      data: involucrado,
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

const updateInvolucrado = async (req, res) => {
  const { id } = req.params;

  const {
    nombre,
    apellido,
    DNI,
    telefono,
    email,
    ciudad,
    tipo,
    lesiones,
    dañosInvolucrado,
    fechaDeNacimiento,
    direccion,
    aportaDNI,
    aportaLC,
    aportaDoc,
    aportaLesiones,
    aportaGastos,
    pais,
  } = req.body;

  try {
    const involucrado = await Involucrado.findByIdAndUpdate(
      id,
      {
        nombre,
        apellido,
        DNI,
        telefono,
        email,
        ciudad,
        tipo,
        lesiones,
        dañosInvolucrado,
        fechaDeNacimiento,
        direccion,
        aportaDNI,
        aportaLC,
        aportaDoc,
        aportaLesiones,
        aportaGastos,
        pais,
      },
      { new: true },
    );

    if (involucrado) {
      res.status(201).json({
        message: 'Involucrado updated',
        data: involucrado,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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

const deleteInvolucrado = async (req, res) => {
  const { id } = req.params;
  try {
    const involucrados = await Involucrado.findByIdAndDelete(id);
    if (involucrados) {
      res.status(200).json({
        message: `Involucrado ${id} deleted`,
        data: involucrados,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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
  postInvolucrado,
  getInvolucrado,
  updateInvolucrado,
  deleteInvolucrado,
  getInvolucradoById,
};
