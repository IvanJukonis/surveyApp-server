const EntrevistaSiniestros = require('../models/EntrevistaSiniestro');

const getEntrevistaSiniestro = async (req, res) => {
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.find();

    if (entrevistaSiniestros.length > 0) {
      return res.status(200).json({
        message: 'EntrevistaSiniestros list',
        data: entrevistaSiniestros,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No entrevistaSiniestros found',
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

const getEntrevistaSiniestroById = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.findById(id);
    if (entrevistaSiniestros) {
      res.status(200).json({
        message: 'EntrevistaSiniestro found',
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
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

const postEntrevistaSiniestro = async (req, res) => {
  const {
    fechaEntrevista,
    hrEntrevista,
    rol,
    firma,
    tipoEntrevista,
    fechaSiniestro,
    hrAproximada,
    hrNotificacion,
    hrConfirmacion,
    hrReclamo,
    relacionVh,
    habilitacionDni,
    habilitacionLc,
    habilitacionTv,
    habilitacionTa,
    aportaDni,
    aportaLc,
    aportaTv,
    aportaTa,
    lesiones,
    reparaciones,
    comprobantesDaños,
    tipoLesiones,
    descLesiones,
    comprobantesLesiones,
    aporteLesiones,
    fotosLesiones,
    gastos,
    descGastos,
    comprobantesGastos,
    zonaImpactoVa,
    zonaImpactoVt,
    relato,
  } = req.body;

  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.create({
      fechaEntrevista,
      hrEntrevista,
      rol,
      firma,
      tipoEntrevista,
      fechaSiniestro,
      hrAproximada,
      hrNotificacion,
      hrConfirmacion,
      hrReclamo,
      relacionVh,
      habilitacionDni,
      habilitacionLc,
      habilitacionTv,
      habilitacionTa,
      aportaDni,
      aportaLc,
      aportaTv,
      aportaTa,
      lesiones,
      reparaciones,
      comprobantesDaños,
      tipoLesiones,
      descLesiones,
      comprobantesLesiones,
      aporteLesiones,
      fotosLesiones,
      gastos,
      descGastos,
      comprobantesGastos,
      zonaImpactoVa,
      zonaImpactoVt,
      relato,
    });

    res.status(201).json({
      message: 'EntrevistaSiniestro created',
      data: entrevistaSiniestros,
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

const updateEntrevistaSiniestro = async (req, res) => {
  const { id } = req.params;

  const {
    fechaEntrevista,
    hrEntrevista,
    rol,
    firma,
    tipoEntrevista,
    fechaSiniestro,
    hrAproximada,
    hrNotificacion,
    hrConfirmacion,
    hrReclamo,
    relacionVh,
    habilitacionDni,
    habilitacionLc,
    habilitacionTv,
    habilitacionTa,
    aportaDni,
    aportaLc,
    aportaTv,
    aportaTa,
    lesiones,
    reparaciones,
    comprobantesDaños,
    tipoLesiones,
    descLesiones,
    comprobantesLesiones,
    aporteLesiones,
    fotosLesiones,
    gastos,
    descGastos,
    comprobantesGastos,
    zonaImpactoVa,
    zonaImpactoVt,
    relato,
  } = req.body;

  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.findByIdAndUpdate(
      id,
      {
        fechaEntrevista,
        hrEntrevista,
        rol,
        firma,
        tipoEntrevista,
        fechaSiniestro,
        hrAproximada,
        hrNotificacion,
        hrConfirmacion,
        hrReclamo,
        relacionVh,
        habilitacionDni,
        habilitacionLc,
        habilitacionTv,
        habilitacionTa,
        aportaDni,
        aportaLc,
        aportaTv,
        aportaTa,
        lesiones,
        reparaciones,
        comprobantesDaños,
        tipoLesiones,
        descLesiones,
        comprobantesLesiones,
        aporteLesiones,
        fotosLesiones,
        gastos,
        descGastos,
        comprobantesGastos,
        zonaImpactoVa,
        zonaImpactoVt,
        relato,
      },
      { new: true },
    );

    if (entrevistaSiniestros) {
      res.status(201).json({
        message: 'EntrevistaSiniestro updated',
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
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

const deleteEntrevistaSiniestro = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaSiniestros = await EntrevistaSiniestros.findByIdAndDelete(id);
    if (entrevistaSiniestros) {
      res.status(200).json({
        message: `EntrevistaSiniestro ${id} deleted`,
        data: entrevistaSiniestros,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaSiniestro not found',
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
  getEntrevistaSiniestro,
  getEntrevistaSiniestroById,
  postEntrevistaSiniestro,
  updateEntrevistaSiniestro,
  deleteEntrevistaSiniestro,
};
