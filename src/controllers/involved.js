const Involved = require('../models/Involved');

const createInvolved = (req, res) => {
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

  Involved.create({
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
  })
    .then((result) => res.status(201).json({
      message: 'Involved created successfully',
      data: result,
      error: false,
    }))
    .catch((error) => {
      if (error.message.includes('E11000 duplicate key error collection')) {
        return res.status(400).json({
          message: 'Email already exists',
          error,
        });
      }
      return res.status(500).json({
        message: 'An error ocurred',
        error,
      });
    });
};

const getAllInvolved = (req, res) => {
  Involved.find()
    .then((involved) => res.status(200).json({
      message: 'Complete involved list',
      data: involved,
      error: false,
    }))
    .catch((error) => res.status(500).json({
      message: 'An error ocurred',
      error,
    }));
};

module.exports = {
  createInvolved,
  getAllInvolved,
};
