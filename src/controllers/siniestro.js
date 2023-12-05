const Siniestros = require('../models/Siniestro');

const handleErrors = (res, error) => {
  console.error(error);
  return res.status(500).json({
    message: 'Internal Server Error',
    data: null,
    error: true,
  });
};

const handleNotFound = (res, id) => res.status(404).json({
  message: `Siniestro ${id} not found`,
  data: null,
  error: true,
});

const isEmpty = (array) => array.length === 0;

const getSiniestro = async (req, res) => {
  try {
    const siniestros = await Siniestros.find();

    if (!isEmpty(siniestros)) {
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
    return handleErrors(res, error);
  }
};

const getSiniestroById = async (req, res) => {
  const { id } = req.params;
  try {
    const siniestro = await Siniestros.findById(id);

    if (siniestro) {
      return res.status(200).json({
        message: 'Siniestro found',
        data: siniestro,
        error: false,
      });
    }
    return handleNotFound(res, id);
  } catch (error) {
    return handleErrors(res, error);
  }
};

const postSiniestro = async (req, res) => {
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
    const siniestro = await Siniestros.create({
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

    return res.status(201).json({
      message: 'Siniestro created',
      data: siniestro,
      error: false,
    });
  } catch (error) {
    return handleErrors(res, error);
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
    const siniestro = await Siniestros.findByIdAndUpdate(
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

    if (siniestro) {
      return res.status(201).json({
        message: 'Siniestro updated',
        data: siniestro,
        error: false,
      });
    }
    return handleNotFound(res, id);
  } catch (error) {
    return handleErrors(res, error);
  }
};

const deleteSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const siniestro = await Siniestros.findByIdAndDelete(id);
    if (siniestro) {
      return res.status(200).json({
        message: `Siniestro ${id} deleted`,
        data: siniestro,
        error: false,
      });
    }
    return handleNotFound(res, id);
  } catch (error) {
    return handleErrors(res, error);
  }
};

module.exports = {
  getSiniestro,
  getSiniestroById,
  postSiniestro,
  updateSiniestro,
  deleteSiniestro,
};
