const Eventos = require('../models/Evento');

const getEvento = async (req, res) => {
  try {
    const eventos = await Eventos.find();

    if (eventos.length > 0) {
      return res.status(200).json({
        message: 'Eventos list',
        data: eventos,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No eventos found',
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

const getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const eventos = await Eventos.findById(id);
    if (eventos) {
      res.status(200).json({
        message: 'Evento found',
        data: eventos,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Evento not found',
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

const postEvento = async (req, res) => {
  const {
    siniestro,
    visibilidadEntrevista,
    visibilidadInforme,
    tipo,
    fecha,
    hora,
    descripcion,
    comprobar,
    comprobado,
    comprobable,
    predisposicion,
    resolucion,
  } = req.body;

  try {
    const eventos = await Eventos.create({
      siniestro,
      visibilidadEntrevista,
      visibilidadInforme,
      tipo,
      fecha,
      hora,
      descripcion,
      comprobar,
      comprobado,
      comprobable,
      predisposicion,
      resolucion,
    });

    res.status(201).json({
      message: 'Evento created',
      data: eventos,
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

const updateEvento = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    visibilidadEntrevista,
    visibilidadInforme,
    tipo,
    fecha,
    hora,
    descripcion,
    comprobar,
    comprobado,
    comprobable,
    predisposicion,
    resolucion,
  } = req.body;

  try {
    const eventos = await Eventos.findByIdAndUpdate(
      id,
      {
        siniestro,
        visibilidadEntrevista,
        visibilidadInforme,
        tipo,
        fecha,
        hora,
        descripcion,
        comprobar,
        comprobado,
        comprobable,
        predisposicion,
        resolucion,
      },
      { new: true },
    );

    if (eventos) {
      res.status(201).json({
        message: 'Evento updated',
        data: eventos,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Evento not found',
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

const deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const eventos = await Eventos.findByIdAndDelete(id);
    if (eventos) {
      res.status(200).json({
        message: `Evento ${id} deleted`,
        data: eventos,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Evento not found',
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
  getEvento,
  getEventoById,
  postEvento,
  updateEvento,
  deleteEvento,
};
