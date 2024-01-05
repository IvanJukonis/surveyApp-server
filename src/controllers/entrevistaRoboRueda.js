const EntrevistaRoboRueda = require('../models/EntrevistaRoboRueda');

const getEntrevistaRoboRueda = async (req, res) => {
  try {
    const entrevistaRoboRuedas = await EntrevistaRoboRueda.find();

    if (entrevistaRoboRuedas.length > 0) {
      return res.status(200).json({
        message: 'EntrevistaRoboRuedas list',
        data: entrevistaRoboRuedas,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'No entrevistaRoboRuedas found',
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

const getEntrevistaRoboRuedaById = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaRoboRuedas = await EntrevistaRoboRueda.findById(id);
    if (entrevistaRoboRuedas) {
      res.status(200).json({
        message: 'EntrevistaRoboRueda found',
        data: entrevistaRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaRoboRueda not found',
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

const postEntrevistaRoboRueda = async (req, res) => {
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
    usoVh,
    tipoUsoVh,
    alarmaActiva,
    cierreCentralizado,
    relato,
    duenoPrevio,
    aportaDueñoPrevio,
    tuercaDeSeguridad,
    bulones,
    prestaRueda,
    intervensionPolicial,
    actaIntervensionPolicial,
  } = req.body;

  try {
    const entrevistaRoboRuedas = await EntrevistaRoboRueda.create({
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
      usoVh,
      tipoUsoVh,
      alarmaActiva,
      cierreCentralizado,
      relato,
      duenoPrevio,
      aportaDueñoPrevio,
      tuercaDeSeguridad,
      bulones,
      prestaRueda,
      intervensionPolicial,
      actaIntervensionPolicial,
    });

    res.status(201).json({
      message: 'EntrevistaRoboRueda created',
      data: entrevistaRoboRuedas,
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

const updateEntrevistaRoboRueda = async (req, res) => {
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
    usoVh,
    tipoUsoVh,
    alarmaActiva,
    cierreCentralizado,
    relato,
    duenoPrevio,
    aportaDueñoPrevio,
    tuercaDeSeguridad,
    bulones,
    prestaRueda,
    intervensionPolicial,
    actaIntervensionPolicial,
  } = req.body;

  try {
    const entrevistaRoboRuedas = await EntrevistaRoboRueda.findByIdAndUpdate(
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
        usoVh,
        tipoUsoVh,
        alarmaActiva,
        cierreCentralizado,
        relato,
        duenoPrevio,
        aportaDueñoPrevio,
        tuercaDeSeguridad,
        bulones,
        prestaRueda,
        intervensionPolicial,
        actaIntervensionPolicial,
      },
      { new: true },
    );

    if (entrevistaRoboRuedas) {
      res.status(201).json({
        message: 'EntrevistaRoboRueda updated',
        data: entrevistaRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaRoboRueda not found',
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

const deleteEntrevistaRoboRueda = async (req, res) => {
  const { id } = req.params;
  try {
    const entrevistaRoboRuedas = await EntrevistaRoboRueda.findByIdAndDelete(id);
    if (entrevistaRoboRuedas) {
      res.status(200).json({
        message: `EntrevistaRoboRueda ${id} deleted`,
        data: entrevistaRoboRuedas,
        error: false,
      });
    } else {
      res.status(404).json({
        message: 'EntrevistaRoboRueda not found',
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
  getEntrevistaRoboRueda,
  getEntrevistaRoboRuedaById,
  postEntrevistaRoboRueda,
  updateEntrevistaRoboRueda,
  deleteEntrevistaRoboRueda,
};
