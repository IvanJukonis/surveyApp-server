const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrevistaRoboRuedaSchema = new Schema({
  fechaEntrevista: {

  },
  hrEntrevista: {

  },
  rol: {

  },
  firma: {

  },
  tipoEntrevista: {

  },
  fechaSiniestro: {

  },
  hrAproximada: {

  },
  hrNotificacion: {

  },
  hrConfirmacion: {

  },
  hrReclamo: {

  },
  relacionVh: {

  },
  habilitacionDni: {

  },
  habilitacionLc: {

  },
  habilitacionTv: {

  },
  habilitacionTa: {

  },
  aportaDni: {

  },
  aportaLc: {

  },
  aportaTv: {

  },
  aportaTa: {

  },
  usoVh: {

  },
  tipoUsoVh: {

  },
  alarmaActiva: {

  },
  cierreCentralizado: {

  },
  relato: {

  },
  duenoPrevio: {

  },
  aportaDueñoPrevio: {

  },
  tuercaDeSeguridad: {

  },
  bulones: {

  },
  prestaRueda: {

  },
  intervensionPolicial: {

  },
  actaIntervensionPolicial: {

  },
});

module.exports = mongoose.model('entrevistaRoboRueda', entrevistaRoboRuedaSchema);
