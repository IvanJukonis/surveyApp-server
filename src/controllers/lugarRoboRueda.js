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
      message: 'Internal Server Error',
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const postLugarRoboRueda = async (req, res) => {
  const {
    siniestro,
    prioridad,
    direccion,
    ciudad,
    provincia,
    evidenciaDanos,
    permiso,
    perros,
    alarma,
    presencia,
    disposicionVehiculo,
    usoEntorno,
    descripcion,
  } = req.body;
  try {
    const lugarRoboRueda = await LugarRoboRuedas.create({
      siniestro,
      prioridad,
      direccion,
      ciudad,
      provincia,
      evidenciaDanos,
      permiso,
      perros,
      alarma,
      presencia,
      disposicionVehiculo,
      usoEntorno,
      descripcion,
    });

    res.status(201).json({
      message: 'LugarRoboRueda created',
      data: lugarRoboRueda,
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

const updateLugarRoboRueda = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    prioridad,
    direccion,
    ciudad,
    provincia,
    evidenciaDanos,
    permiso,
    perros,
    alarma,
    presencia,
    disposicionVehiculo,
    usoEntorno,
    descripcion,
  } = req.body;

  try {
    const lugarRoboRueda = await LugarRoboRuedas.findByIdAndUpdate(
      id,
      {
        siniestro,
        prioridad,
        direccion,
        ciudad,
        provincia,
        evidenciaDanos,
        permiso,
        perros,
        alarma,
        presencia,
        disposicionVehiculo,
        usoEntorno,
        descripcion,
      },
      { new: true },
    );

    if (lugarRoboRueda) {
      res.status(201).json({
        message: 'LugarRoboRueda updated',
        data: lugarRoboRueda,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'LugarRoboRueda not found',
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

const deleteLugarRoboRueda = async (req, res) => {
  const { id } = req.params;
  try {
    const lugarRoboRuedas = await LugarRoboRuedas.findByIdAndDelete(id);
    if (lugarRoboRuedas) {
      res.status(200).json({
        message: `LugarRoboRueda ${id} deleted`,
        data: lugarRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'LugarRoboRueda not found',
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
  updateLugarRoboRueda,
  deleteLugarRoboRueda,
  postLugarRoboRueda,
  getLugarRoboRueda,
  getLugarRoboRuedaById,
};
