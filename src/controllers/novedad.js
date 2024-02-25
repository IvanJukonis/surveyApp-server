const Novedades = require('../models/Novedad');

const getNovedad = async (req, res) => {
  try {
    const novedades = await Novedades.find();

    if (novedades.length > 0) {
      return res.status(200).json({
        message: 'Novedades list',
        data: novedades,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No novedades found',
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

const getNovedadById = async (req, res) => {
  const { id } = req.params;
  try {
    const novedades = await Novedades.findById(id);
    if (novedades) {
      res.status(200).json({
        message: 'Novedad found',
        data: novedades,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Novedad not found',
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

const postNovedad = async (req, res) => {
  const {
    siniestro,
    fecha,
    hora,
    titulo,
    tipo,
    relacion,
    descripcion,
    visibilidad,
    informe,
    respuesta,
    responsable,
  } = req.body;

  try {
    const novedades = await Novedades.create({
      siniestro,
      fecha,
      hora,
      titulo,
      tipo,
      relacion,
      descripcion,
      visibilidad,
      informe,
      respuesta,
      responsable,
    });

    res.status(201).json({
      message: 'Novedad created',
      data: novedades,
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

const updateNovedad = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    fecha,
    hora,
    titulo,
    tipo,
    relacion,
    descripcion,
    visibilidad,
    informe,
    respuesta,
    responsable,
  } = req.body;

  try {
    const novedades = await Novedades.findByIdAndUpdate(
      id,
      {
        siniestro,
        fecha,
        hora,
        titulo,
        tipo,
        relacion,
        descripcion,
        visibilidad,
        informe,
        respuesta,
        responsable,
      },
      { new: true },
    );

    if (novedades) {
      res.status(201).json({
        message: 'Novedad updated',
        data: novedades,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Novedad not found',
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

const deleteNovedad = async (req, res) => {
  const { id } = req.params;
  try {
    const novedades = await Novedades.findByIdAndDelete(id);
    if (novedades) {
      res.status(200).json({
        message: `Novedad ${id} deleted`,
        data: novedades,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Novedad not found',
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
  getNovedad,
  getNovedadById,
  postNovedad,
  updateNovedad,
  deleteNovedad,
};
