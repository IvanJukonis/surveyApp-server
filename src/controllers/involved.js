const Involved = require('../models/Involved');

const getInvolved = async (req, res) => {
  try {
    const involved = await Involved.find();

    if (involved.length > 0) {
      return res.status(200).json({
        message: 'Involved list',
        data: involved,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No Involved found',
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

const getInvolvedById = (req, res) => {
  const { id } = req.params;

  Involved.findById(id)
    .then((involved) => {
      if (involved) {
        res.status(200).json({
          message: 'Involved Found',
          data: involved,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Involved not found',
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

const createInvolved = async (req, res) => {
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
    const involved = await Involved.create({
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
      message: 'Involved created',
      data: involved,
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

const updateInvolved = (req, res) => {
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

  Involved.findByIdAndUpdate(
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
    .then((involved) => {
      if (involved) {
        res.status(201).json({
          message: 'Involved updated',
          data: involved,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Involved not found',
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

const deleteInvolved = (req, res) => {
  const { id } = req.params;
  Involved.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: `Involved ${id} deleted`,
          data: result,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Involved not found',
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Error in the request',
      error,
    }));
};

module.exports = {
  createInvolved,
  getInvolved,
  updateInvolved,
  deleteInvolved,
  getInvolvedById,
};
