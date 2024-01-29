const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrevistaRoboRuedaSchema = new Schema({
  involucrado: {
    type: [Schema.Types.ObjectId],
    ref: 'Involucrado',
  },
  vehiculo: {
    type: [Schema.Types.ObjectId],
    ref: 'Vehiculo',
  },
  entrevistado: {
    type: [Schema.Types.ObjectId],
    ref: 'Involucrado',
  },
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  evento: {
    type: [Schema.Types.ObjectId],
    ref: 'Evento',
    required: true,
  },
  rueda: {
    type: [Schema.Types.ObjectId],
    ref: 'Rueda',
    required: true,
  },
  nombreEntrevistado: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  apellidoEntrevistado: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  fechaEntrevista: {
    type: Date,
    required: true,
  },
  hrEntrevista: {
    type: Date,
    required: true,
  },
  rol: {
    type: String,
    enum: ['CVA', 'CVT', 'PVA', 'PVT', 'TTG', 'TER', 'TVT', 'TVA', 'SOC', 'ABG'],
    required: true,
  },
  firma: {
    type: String,
    enum: ['SIN FIRMA', 'FIRMADO', 'NEGADO', 'ESPERA'],
    required: true,
  },
  tipoEntrevista: {
    type: String,
    enum: ['PRESENCIAL', 'TELEFONICA', 'VIDEOLLAMADA'],
    required: true,
  },
  fechaSiniestro: {
    type: Date,
    required: true,
  },
  hrAproximada: {
    type: Date,
  },
  hrNotificacion: {
    type: Date,
  },
  hrConfirmacion: {
    type: Date,
  },
  hrReclamo: {
    type: Date,
  },
  relacionVh: {
    type: String,
    enum: ['Titular', 'Autorizado', 'Pasajero', 'No autorizado'],
  },
  habilitacionDni: {
    type: String,
    enum: ['DNI habilitado', 'DNI no habilitado'],
  },
  habilitacionLc: {
    type: String,
    enum: ['Licencia de conducir habilitada', 'Licencia de conducir no habilitada'],
  },
  habilitacionTv: {
    type: String,
    enum: ['Tarjeta verde habilitada', 'Tarjeta verde no habilitada'],
  },
  habilitacionTa: {
    type: String,
    enum: ['Tarjeta azul habilitada', 'Tarjeta verde no habilitada'],
  },
  aportaDni: {
    type: Boolean,
    default: false,
  },
  aportaLc: {
    type: Boolean,
    default: false,
  },
  aportaTv: {
    type: Boolean,
    default: false,
  },
  aportaTa: {
    type: Boolean,
    default: false,
  },
  usoVh: {
    type: String,
    enum: ['Particular', 'Profesional', 'Servicio', 'Otro'],
  },
  tipoUsoVh: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  alarmaActiva: {
    type: Boolean,
    default: false,
  },
  cierreCentralizado: {
    type: Boolean,
    default: false,
  },
  relato: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  duenoPrevio: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  aportaDueñoPrevio: {
    type: Boolean,
    default: false,
  },
  tuercaDeSeguridad: {
    type: Boolean,
    default: false,
  },
  bulones: {
    type: String,
    maxLength: 50,
  },
  prestaRueda: {
    type: Boolean,
    default: false,
  },
  intervensionPolicial: {
    type: Boolean,
    default: false,
  },
  actaIntervensionPolicial: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('entrevistaRoboRueda', entrevistaRoboRuedaSchema);
