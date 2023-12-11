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
      message: 'Internal Server Error',
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
      message: 'Internal Server Error',
      data: null,
      error: true,
    });
  }
};

const postLugarSiniestro = async (req, res) => {
  const {
    siniestro,
    prioridad,
    calleVa,
    direccionVa,
    direcionCalleVa,
    estadoCalleVa,
    tipoCalleVa,
    badenCalleVa,
    semaforoCalleVa,
    cartelPareCalleVa,
    camaraCalleVa,
    calleVt,
    direccionVt,
    direccionCalleVt,
    estadoCalleVt,
    tipoCalleVt,
    badenCalleVt,
    semaforoCalleVt,
    cartelPareCalleVt,
    camaraCalleVt,
    ciudad,
    provincia,
    descripcion,
  } = req.body;

  try {
    const lugarSiniestro = await LugarSiniestros.create({
      siniestro,
      prioridad,
      calleVa,
      direccionVa,
      direcionCalleVa,
      estadoCalleVa,
      tipoCalleVa,
      badenCalleVa,
      semaforoCalleVa,
      cartelPareCalleVa,
      camaraCalleVa,
      calleVt,
      direccionVt,
      direccionCalleVt,
      estadoCalleVt,
      tipoCalleVt,
      badenCalleVt,
      semaforoCalleVt,
      cartelPareCalleVt,
      camaraCalleVt,
      ciudad,
      provincia,
      descripcion,
    });

    res.status(201).json({
      message: 'LugarSiniestro created',
      data: lugarSiniestro,
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

const updateLugarSiniestro = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    prioridad,
    calleVa,
    direccionVa,
    direcionCalleVa,
    estadoCalleVa,
    tipoCalleVa,
    badenCalleVa,
    semaforoCalleVa,
    cartelPareCalleVa,
    camaraCalleVa,
    calleVt,
    direccionVt,
    direccionCalleVt,
    estadoCalleVt,
    tipoCalleVt,
    badenCalleVt,
    semaforoCalleVt,
    cartelPareCalleVt,
    camaraCalleVt,
    ciudad,
    provincia,
    descripcion,
  } = req.body;

  try {
    const lugarSiniestros = await LugarSiniestros.findByIdAndUpdate(
      id,
      {
        siniestro,
        prioridad,
        calleVa,
        direccionVa,
        direcionCalleVa,
        estadoCalleVa,
        tipoCalleVa,
        badenCalleVa,
        semaforoCalleVa,
        cartelPareCalleVa,
        camaraCalleVa,
        calleVt,
        direccionVt,
        direccionCalleVt,
        estadoCalleVt,
        tipoCalleVt,
        badenCalleVt,
        semaforoCalleVt,
        cartelPareCalleVt,
        camaraCalleVt,
        ciudad,
        provincia,
        descripcion,
      },
      { new: true },
    );

    if (lugarSiniestros) {
      res.status(201).json({
        message: 'LugarSiniestro updated',
        data: lugarSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'LugarSiniestro not found',
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

const deleteLugarSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const lugarSiniestros = await LugarSiniestros.findByIdAndDelete(id);
    if (lugarSiniestros) {
      res.status(200).json({
        message: `LugarSiniestro ${id} deleted`,
        data: lugarSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'LugarSiniestro not found',
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
  updateLugarSiniestro,
  deleteLugarSiniestro,
  postLugarSiniestro,
  getLugarSiniestro,
  getLugarSiniestroById,
};
