const Ruedas = require('../models/Rueda');

const getRueda = async (req, res) => {
  try {
    const ruedas = await Ruedas.find();

    if (ruedas.length > 0) {
      return res.status(200).json({
        message: 'Ruedas list',
        data: ruedas,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No ruedas found',
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

const getRuedaById = async (req, res) => {
  const { id } = req.params;
  try {
    const ruedas = await Ruedas.findById(id);
    if (ruedas) {
      res.status(200).json({
        message: 'Rueda found',
        data: ruedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Rueda not found',
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

const postRueda = async (req, res) => {
  const {
    descripcion,
    marca,
    numDot,
    numLlanta,
    tipo,
    tipoLlanta,
    posicionActual,
    posicionPrevia,
    fechaColocacion,
    posicionTransitoria,
    sustraida,
    factura,
    aporteFactura,
    aporteFoto,
    metadatosFoto,
    anotaciones,
    estado,
  } = req.body;

  try {
    const ruedas = await Ruedas.create({
      descripcion,
      marca,
      numDot,
      numLlanta,
      tipo,
      tipoLlanta,
      posicionActual,
      posicionPrevia,
      fechaColocacion,
      posicionTransitoria,
      sustraida,
      factura,
      aporteFactura,
      aporteFoto,
      metadatosFoto,
      anotaciones,
      estado,
    });

    res.status(201).json({
      message: 'Rueda created',
      data: ruedas,
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

const updateRueda = async (req, res) => {
  const { id } = req.params;

  const {
    descripcion,
    marca,
    numDot,
    numLlanta,
    tipo,
    tipoLlanta,
    posicionActual,
    posicionPrevia,
    fechaColocacion,
    posicionTransitoria,
    sustraida,
    factura,
    aporteFactura,
    aporteFoto,
    metadatosFoto,
    anotaciones,
    estado,
  } = req.body;

  try {
    const ruedas = await Ruedas.findByIdAndUpdate(
      id,
      {
        descripcion,
        marca,
        numDot,
        numLlanta,
        tipo,
        tipoLlanta,
        posicionActual,
        posicionPrevia,
        fechaColocacion,
        posicionTransitoria,
        sustraida,
        factura,
        aporteFactura,
        aporteFoto,
        metadatosFoto,
        anotaciones,
        estado,
      },
      { new: true },
    );

    if (ruedas) {
      res.status(201).json({
        message: 'Rueda updated',
        data: ruedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Rueda not found',
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

const deleteRueda = async (req, res) => {
  const { id } = req.params;
  try {
    const ruedas = await Ruedas.findByIdAndDelete(id);
    if (ruedas) {
      res.status(200).json({
        message: `Rueda ${id} deleted`,
        data: ruedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Rueda not found',
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
  getRueda,
  getRuedaById,
  postRueda,
  updateRueda,
  deleteRueda,
};
