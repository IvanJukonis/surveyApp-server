const Involucrado = require('../models/Involucrado');

const getInvolucrado = async (req, res) => {
  try {
    const involucrado = await Involucrado.aggregate([
      {
        $lookup: {
          from: 'siniestros',
          localField: 'siniestro',
          foreignField: '_id',
          as: 'siniestroData',
        },
      },
    ]);

    if (involucrado.length > 0) {
      return res.status(200).json({
        message: 'Involucrados list',
        data: involucrado,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No Involucrados found',
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

const getInvolucradoById = async (req, res) => {
  const { id } = req.params;
  try {
    const involucrado = await Involucrado.findById(id);
    if (involucrado) {
      res.status(200).json({
        message: 'Involucrado Found',
        data: involucrado,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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

const postInvolucrado = async (req, res) => {
  const {
    siniestro,
    prioridad,
    apellido,
    nombre,
    rol,
    relacion,
    titular,
    dni,
    fechaNacimiento,
    domicilio,
    ciudad,
    telefono,
    email,
    pais,
    codigoPostal,
    descLesiones,
    lesiones,
    entrevistado,
    ocupacion,
    direccionOcupacion,
    licenciaAportada,
    licenciaPosesion,
    licenciaVencimiento,
    licenciaHabilitada,
    licenciaCategoria,
  } = req.body;
  try {
    const involucrado = await Involucrado.create({
      siniestro,
      prioridad,
      rol,
      relacion,
      titular,
      dni,
      apellido,
      nombre,
      fechaNacimiento,
      domicilio,
      telefono,
      ciudad,
      email,
      pais,
      codigoPostal,
      descLesiones,
      lesiones,
      entrevistado,
      ocupacion,
      direccionOcupacion,
      licenciaAportada,
      licenciaPosesion,
      licenciaVencimiento,
      licenciaHabilitada,
      licenciaCategoria,
    });

    res.status(201).json({
      message: 'Involucrado created',
      data: involucrado,
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

const updateInvolucrado = async (req, res) => {
  const { id } = req.params;

  const {
    siniestro,
    prioridad,
    rol,
    relacion,
    titular,
    dni,
    fechaNacimiento,
    apellido,
    nombre,
    domicilio,
    ciudad,
    email,
    pais,
    codigoPostal,
    telefono,
    descLesiones,
    lesiones,
    entrevistado,
    ocupacion,
    direccionOcupacion,
    licenciaAportada,
    licenciaPosesion,
    licenciaVencimiento,
    licenciaHabilitada,
    licenciaCategoria,
  } = req.body;

  try {
    const involucrado = await Involucrado.findByIdAndUpdate(
      id,
      {
        siniestro,
        prioridad,
        rol,
        relacion,
        titular,
        dni,
        fechaNacimiento,
        apellido,
        nombre,
        domicilio,
        ciudad,
        telefono,
        email,
        pais,
        codigoPostal,
        descLesiones,
        lesiones,
        entrevistado,
        ocupacion,
        direccionOcupacion,
        licenciaAportada,
        licenciaPosesion,
        licenciaVencimiento,
        licenciaHabilitada,
        licenciaCategoria,
      },
      { new: true },
    );

    if (involucrado) {
      res.status(201).json({
        message: 'Involucrado updated',
        data: involucrado,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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

const deleteInvolucrado = async (req, res) => {
  const { id } = req.params;
  try {
    const involucrados = await Involucrado.findByIdAndDelete(id);
    if (involucrados) {
      res.status(200).json({
        message: `Involucrado ${id} deleted`,
        data: involucrados,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'Involucrado not found',
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
  postInvolucrado,
  getInvolucrado,
  updateInvolucrado,
  deleteInvolucrado,
  getInvolucradoById,
};
