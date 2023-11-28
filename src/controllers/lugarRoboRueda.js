const LugarRoboRuedas = require('../models/LugarRoboRueda');

const getLugarRoboRueda = async (req, res) => {
  try {
    const lugarRoboRuedas = await LugarRoboRuedas.find();

    if (lugarRoboRuedas.length > 0) {
      return res.status(200).json({
        message: 'LugarRoboRuedas list',
        data: lugarRoboRuedas,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No lugarRoboRuedas found',
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

const getLugarRoboRuedaById = async (req, res) => {
  try {
    const { id } = req.params;
    const lugarRoboRueda = await LugarRoboRuedas.findById(id);

    if (lugarRoboRueda) {
      return res.status(200).json({
        message: 'LugarRoboRueda found',
        data: lugarRoboRueda,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'LugarRoboRueda not found',
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

const createLugarRoboRueda = (req, res) => {
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

  LugarRoboRuedas.create({
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
      message: 'LugarRoboRueda created successfuly',
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

const updateLugarRoboRueda = (req, res) => {
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

  LugarRoboRuedas.findByIdAndUpdate(
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
          message: `LugarRoboRueda with id: ${id} was not found`,
          error: true,
        });
      }
      return res.status(201).json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const deleteLugarRoboRueda = async (req, res) => {
  try {
    const { id } = req.params;

    const lugarRoboRuedaExist = await LugarRoboRuedas.findById(id);

    if (!lugarRoboRuedaExist) {
      return res.status(404).send('ID was not found');
    }

    await LugarRoboRuedas.findByIdAndDelete(id);

    res.send('LugarRoboRueda has been deleted');
  } catch (error) {
    res.status(500).send('LugarRoboRueda could not be deleted');
  }
  return null;
};

module.exports = {
  updateLugarRoboRueda,
  deleteLugarRoboRueda,
  createLugarRoboRueda,
  getLugarRoboRueda,
  getLugarRoboRuedaById,
};
