const Involucrado = require('../models/Involucrado');

const getInvolucrado = async (req, res) => {
  try {
    const involucrado = await Involucrado.find();

    if (involucrado.length > 0) {
      return res.status(200).json({
        message: 'Involucrado list',
        data: involucrado,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No Involucrado found',
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

const getInvolucradoById = (req, res) => {
  const { id } = req.params;

  Involucrado.findById(id)
    .then((involucrado) => {
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
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
        data: null,
        error: true,
      });
    });
};

const createInvolucrado = async (req, res) => {
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

const updateInvolucrado = (req, res) => {
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

  Involucrado.findByIdAndUpdate(
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
  )
    .then((involucrado) => {
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
    })
    .catch((error) => res.status(500).json({
      message: error,
      data: null,
      error: true,
    }));
};

const deleteInvolucrado = (req, res) => {
  const { id } = req.params;
  Involucrado.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: `Involucrado ${id} deleted`,
          data: result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Involucrado not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Error in the request',
      error,
    }));
};

module.exports = {
  createInvolucrado,
  getInvolucrado,
  updateInvolucrado,
  deleteInvolucrado,
  getInvolucradoById,
};
