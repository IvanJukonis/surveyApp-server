const mongoose = require('mongoose');
const {
  dateTime,
  string,
} = require('./regex');

const { Schema } = mongoose;

const entrevistaRoboRuedaSchema = new Schema({
  fechaEntrevista: {
    ...dateTime,
  },
  hrEntrevista: {
    ...dateTime,
  },
  rol: {

  },
  firma: {

  },
  tipoEntrevista: {

  },
  fechaSiniestro: {
    ...dateTime,
  },
  hrAproximada: {
    ...dateTime,
  },
  hrNotificacion: {
    ...dateTime,
  },
  hrConfirmacion: {
    ...dateTime,
  },
  hrReclamo: {
    ...dateTime,
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
    ...string,
  },
  duenoPrevio: {

  },
  aportaDueñoPrevio: {

  },
  tuercaDeSeguridad: {
    ...string,
  },
  bulones: {
    ...string,
  },
  prestaRueda: {

  },
  intervensionPolicial: {

  },
  actaIntervensionPolicial: {

  },
});

module.exports = mongoose.model('entrevistaRoboRueda', entrevistaRoboRuedaSchema);
