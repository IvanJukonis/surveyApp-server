const Siniestros = require('../models/Siniestro');

const getSiniestro = async (req, res) => {
  try {
    const siniestros = await Siniestros.find();

    if (siniestros.length > 0) {
      return res.status(200).json({
        message: 'Siniestros list',
        data: siniestros,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No siniestros found',
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

const getSiniestroById = async (req, res) => {
  const { id } = req.params;
  try {
    const siniestros = await Siniestros.findById(id);
    if (siniestros) {
      res.status(200).json({
        message: 'Siniestro found',
        data: siniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Siniestro not found',
        data: null,
        error: true,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const createSiniestro = async (req, res) => {
  const {
    numSiniestro,
    numPoliza,
    numInforme,
    fechaSiniestro,
    fechaDenuncia,
    fechaVencimiento,
    fechaAsignacion,
    hrSiniestro,
    cia,
    tipo,
    presencial,
    instrucciones,
    denuncia,
  } = req.body;

  try {
    const siniestros = await Siniestros.create({
      numSiniestro,
      numPoliza,
      numInforme,
      fechaSiniestro,
      fechaDenuncia,
      fechaVencimiento,
      fechaAsignacion,
      hrSiniestro,
      cia,
      tipo,
      presencial,
      instrucciones,
      denuncia,
    });

    res.status(201).json({
      message: 'Siniestro created',
      data: siniestros,
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

const updateSiniestro = async (req, res) => {
  const { id } = req.params;

  const {
    numSiniestro,
    numPoliza,
    numInforme,
    fechaSiniestro,
    fechaDenuncia,
    fechaVencimiento,
    fechaAsignacion,
    hrSiniestro,
    cia,
    tipo,
    presencial,
    instrucciones,
    denuncia,
  } = req.body;

  try {
    const siniestros = await Siniestros.findByIdAndUpdate(
      id,
      {
        numSiniestro,
        numPoliza,
        numInforme,
        fechaSiniestro,
        fechaDenuncia,
        fechaVencimiento,
        fechaAsignacion,
        hrSiniestro,
        cia,
        tipo,
        presencial,
        instrucciones,
        denuncia,
      },
      { new: true },
    );

    if (siniestros) {
      res.status(201).json({
        message: 'Siniestro updated',
        data: siniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Siniestro not found',
        data: null,
        error: true,
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

const deleteSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const siniestros = await Siniestros.findByIdAndDelete(id);
    if (siniestros) {
      res.status(200).json({
        message: `Siniestro ${id} deleted`,
        data: siniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Siniestro not found',
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
  getSiniestro,
  getSiniestroById,
  createSiniestro,
  updateSiniestro,
  deleteSiniestro,
};
