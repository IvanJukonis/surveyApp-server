const mongoose = require('mongoose');

const { Schema } = mongoose;

const inspeccionSiniestroSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  fotos: {
    type: String,
    enum: ['Se toman fotografias del VH', 'No se toman fotografias del VH'],
    required: true,
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: Date,
  },
  permiso: {
    type: String,
    enum: ['Inspeccion permitida', 'Inspeccion no permitida', 'Inspeccion dificultada'],
    required: true,
  },
  programada: {
    type: String,
    enum: ['Inspeccion programada', 'Inspeccion no programada'],
    required: true,
  },
  daños: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  tipoDaños: {
    type: String,
    enum: ['Daños graves', 'Daños leves', 'Daños medios'],
    required: true,
  },
  descripcionDaños: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  numChasis: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  reparacion: {
    type: Boolean,
    default: false,
  },
  coincidenciaDaños: {
    type: String,
    enum: ['Coincidentes', 'No coincidentes', 'Con inconsistencias'],
    required: true,
  },
  conclusion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
});

module.exports = mongoose.model('inspeccionSiniestro', inspeccionSiniestroSchema);
