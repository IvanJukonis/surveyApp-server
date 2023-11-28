const LugarSiniestros = require('../models/LugarRoboRueda');

const getLugarSiniestro = async (req, res) => {
  try {
    const lugarSiniestros = await LugarSiniestros.find();

    if (lugarSiniestros.length > 0) {
      return res.status(200).json({
        message: 'LugarSiniestros list',
        data: lugarSiniestros,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No lugarSiniestros found',
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

const getLugarSiniestroById = async (req, res) => {
  try {
    const { id } = req.params;
    const lugarSiniestro = await LugarSiniestros.findById(id);

    if (lugarSiniestro) {
      return res.status(200).json({
        message: 'LugarSiniestro found',
        data: lugarSiniestro,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'LugarSiniestro not found',
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

const createLugarSiniestro = (req, res) => {
  const {
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  } = req.body;

  LugarSiniestros.create({
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  })
    .then((result) => res.status(201).json({
      message: 'LugarSiniestro created successfuly',
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

const updateLugarSiniestro = (req, res) => {
  const { id } = req.params;
  const {
    calleVA,
    calleVT,
    direccionVA,
    direccionVT,
    direccionCalleVA,
    direccionCalleVT,
    estadoCalleVA,
    estadoCalleVT,
    calleAdicional,
    direccionCalleAdicional,
    ciudad,
    localidad,
  } = req.body;

  LugarSiniestros.findByIdAndUpdate(
    id,
    {
      calleVA,
      calleVT,
      direccionVA,
      direccionVT,
      direccionCalleVA,
      direccionCalleVT,
      estadoCalleVA,
      estadoCalleVT,
      calleAdicional,
      direccionCalleAdicional,
      ciudad,
      localidad,
    },
    { new: true },
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `LugarSiniestro with id: ${id} was not found`,
          error: true,
        });
      }
      return res.status(201).json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const deleteLugarSiniestro = async (req, res) => {
  try {
    const { id } = req.params;

    const lugarSiniestroExist = await LugarSiniestros.findById(id);

    if (!lugarSiniestroExist) {
      return res.status(404).send('ID was not found');
    }

    await LugarSiniestros.findByIdAndDelete(id);

    res.send('LugarSiniestro has been deleted');
  } catch (error) {
    res.status(500).send('LugarSiniestro could not be deleted');
  }
  return null;
};

module.exports = {
  updateLugarSiniestro,
  deleteLugarSiniestro,
  createLugarSiniestro,
  getLugarSiniestro,
  getLugarSiniestroById,
};
