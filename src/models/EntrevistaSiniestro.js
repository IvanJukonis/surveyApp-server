const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrevistaSiniestroSchema = new Schema({
  involucrado: {
    type: [Schema.Types.ObjectId],
    ref: 'Involucrado',
    required: true,
  },
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  vehiculo: {
    type: [Schema.Types.ObjectId],
    ref: 'Vehiculo',
    required: true,
  },
  evento: {
    type: [Schema.Types.ObjectId],
    ref: 'Evento',
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
    required: true,
  },
  hrNotificacion: {
    type: Date,
    required: true,
  },
  hrConfirmacion: {
    type: Date,
    required: true,
  },
  hrReclamo: {
    type: Date,
    required: true,
  },
  relacionVh: {
    type: String,
    enum: ['Titular', 'Autorizado', 'Pasajero', 'No autorizado'],
    required: true,
  },
  habilitacionDni: {
    type: String,
    enum: ['DNI habilitado', 'DNI no habilitado'],
    required: true,
  },
  habilitacionLc: {
    type: String,
    enum: ['Licencia de conducir habilitada', 'Licencia de conducir no habilitada'],
    required: true,
  },
  habilitacionTv: {
    type: String,
    enum: ['Tarjeta verde habilitada', 'Tarjeta verde no habilitada'],
    required: true,
  },
  habilitacionTa: {
    type: String,
    enum: ['Tarjeta azul habilitada', 'Tarjeta verde no habilitada'],
    required: true,
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
  lesiones: {
    type: String,
    enum: ['Hubo lesionados', 'No hubo lesionados'],
    required: true,
  },
  reparaciones: {
    type: Boolean,
    default: false,
  },
  comprobantesDaños: {
    type: Boolean,
    default: false,
  },
  tipoLesiones: {
    type: String,
    enum: ['Lesiones GRAVES', 'Lesiones LEVES', 'Lesiones REGULARES'],
    required: true,
  },
  descLesiones: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  comprobantesLesiones: {
    type: Boolean,
    default: false,
  },
  aporteLesiones: {
    type: Boolean,
    default: false,
  },
  fotosLesiones: {
    type: Boolean,
    default: false,
  },
  gastos: {
    type: Boolean,
    default: false,
  },
  descGastos: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  comprobantesGastos: {
    type: Boolean,
    default: false,
  },
  zonaImpactoVa: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  zonaImpactoVt: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  relato: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 500,
  },
});

module.exports = mongoose.model('entrevistaSiniestro', entrevistaSiniestroSchema);
