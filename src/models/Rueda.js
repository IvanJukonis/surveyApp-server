const mongoose = require('mongoose');

const { Schema } = mongoose;

const ruedaSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  involucrado: {
    type: [Schema.Types.ObjectId],
    ref: 'Involucrado',
    required: true,
  },
  vehiculo: {
    type: [Schema.Types.ObjectId],
    ref: 'Vehiculo',
    required: true,
  },
  entrevistaRoboRueda: {
    type: [Schema.Types.ObjectId],
    ref: 'EntrevistaRoboRueda',
    required: true,
  },
  inspeccionRoboRueda: {
    type: [Schema.Types.ObjectId],
    ref: 'InspeccionRoboRueda',
    required: true,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  marca: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  numDot: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  numLlanta: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  tipo: {
    type: String,
    enum: ['Original', 'Suplente', 'Prestada'],
    required: true,
  },
  tipoLlanta: {
    type: String,
    enum: ['Aleacion', 'Chapa', 'Otro'],
    required: true,
  },
  posicionActual: {
    type: String,
    enum: ['DI', 'DD', 'TI', 'TD', 'AUX', 'N/N'],
    required: true,
  },
  fechaColocacion: {
    type: Date,
  },
  posicionPrevia: {
    type: String,
    enum: ['DI', 'DD', 'TI', 'TD', 'AUX', 'N/N'],
    required: true,
  },
  posicionTransitoria: {
    type: String,
    enum: ['DI', 'DD', 'TI', 'TD', 'AUX', 'N/N'],
    required: true,
  },
  sustraida: {
    type: Boolean,
    default: false,
  },
  estado: {
    type: String,
    enum: ['Nuevo', 'Medio desgastado', 'Desgastado'],
    required: true,
  },
  aporteFoto: {
    type: String,
    enum: ['Se aportan fotos previas', 'No se aportan fotos previas'],
    required: true,
  },
  metadatosFoto: {
    type: String,
    enum: ['Metadatos presentes', 'Sin metadatos presentes'],
    required: true,
  },
  factura: {
    type: Boolean,
    default: false,
  },
  aporteFactura: {
    type: Boolean,
    default: false,
  },
  anotaciones: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  ruedaEntrevista: {
    type: Boolean,
    default: false,
  },
  ruedaInspeccion: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('rueda', ruedaSchema);
