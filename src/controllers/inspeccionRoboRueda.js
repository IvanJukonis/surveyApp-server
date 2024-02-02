const InspeccionRoboRuedas = require('../models/InspeccionRoboRueda');

const getInspeccionRoboRueda = async (req, res) => {
  try {
    const inspeccionRoboRuedas = await InspeccionRoboRuedas.find();

    if (inspeccionRoboRuedas.length > 0) {
      return res.status(200).json({
        message: 'InspeccionRoboRuedas list',
        data: inspeccionRoboRuedas,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No inspeccionRoboRuedas found',
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

const getInspeccionRoboRuedaById = async (req, res) => {
  const { id } = req.params;
  try {
    const inspeccionRoboRuedas = await InspeccionRoboRuedas.findById(id);
    if (inspeccionRoboRuedas) {
      res.status(200).json({
        message: 'InspeccionRoboRueda found',
        data: inspeccionRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionRoboRueda not found',
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

const postInspeccionRoboRueda = async (req, res) => {
  const {
    siniestro,
    vehiculo,
    involucrado,
    rueda,
    fecha,
    hora,
    permiso,
    programada,
    fotos,
    disposicion,
    daños,
    conclusion,
  } = req.body;

  try {
    const inspeccionRoboRuedas = await InspeccionRoboRuedas.create({
      siniestro,
      vehiculo,
      involucrado,
      rueda,
      fecha,
      hora,
      permiso,
      programada,
      fotos,
      disposicion,
      daños,
      conclusion,
    });

    res.status(201).json({
      message: 'InspeccionRoboRueda created',
      data: inspeccionRoboRuedas,
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

const updateInspeccionRoboRueda = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    fecha,
    vehiculo,
    involucrado,
    rueda,
    hora,
    permiso,
    programada,
    fotos,
    disposicion,
    daños,
    conclusion,
  } = req.body;

  try {
    const inspeccionRoboRuedas = await InspeccionRoboRuedas.findByIdAndUpdate(
      id,
      {
        siniestro,
        fecha,
        vehiculo,
        involucrado,
        rueda,
        hora,
        permiso,
        programada,
        fotos,
        disposicion,
        daños,
        conclusion,
      },
      { new: true },
    );

    if (inspeccionRoboRuedas) {
      res.status(201).json({
        message: 'InspeccionRoboRueda updated',
        data: inspeccionRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionRoboRueda not found',
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

const deleteInspeccionRoboRueda = async (req, res) => {
  const { id } = req.params;
  try {
    const inspeccionRoboRuedas = await InspeccionRoboRuedas.findByIdAndDelete(id);
    if (inspeccionRoboRuedas) {
      res.status(200).json({
        message: `InspeccionRoboRueda ${id} deleted`,
        data: inspeccionRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'InspeccionRoboRueda not found',
        data: null,
        error: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getInspeccionRoboRueda,
  getInspeccionRoboRuedaById,
  postInspeccionRoboRueda,
  updateInspeccionRoboRueda,
  deleteInspeccionRoboRueda,
};
