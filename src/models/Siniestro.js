const mongoose = require('mongoose');

const { Schema } = mongoose;

const siniestroSchema = new Schema({
  relevador: {
    type: [Schema.Types.ObjectId],
    ref: 'Relevador',
    required: true,
  },
  controlador: {
    type: [Schema.Types.ObjectId],
    ref: 'Controlador',
    required: true,
  },
  numSiniestro: {
    type: Number,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  numPoliza: {
    type: Number,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  numInforme: {
    type: Number,
    minLength: 3,
    maxLength: 5,
    required: true,
  },
  fechaSiniestro: {
    type: Date,
    required: true,
  },
  fechaDenuncia: {
    type: Date,
    required: true,
  },
  fechaVencimiento: {
    type: Date,
    required: true,
  },
  fechaAsignacion: {
    type: Date,
    required: true,
  },
  hrSiniestro: {
    type: Date,
    required: true,
  },
  cia: {
    type: String,
    enum: ['San Cristobal', 'Rio Uruguay', 'Sancor', 'La Segunda', 'Rivadavia'],
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Siniestro', 'Fraude', 'Completo'],
    required: true,
  },
  presencial: {
    type: Boolean,
    default: true,
  },
  instrucciones: {
    type: String,
    minLength: 3,
    maxLength: 500,
    required: true,
  },
  denuncia: {
    type: String,
    minLength: 3,
    maxLength: 500,
    required: true,
  },
  requerido: {
    type: String,
    enum: ['Relevamiento completo', 'Relevamiento sin cierre', 'Investigacion de fraude', 'Relevamiento y comprobacion', 'Relevamiento y comprobacion, sin cierre'],
    required: true,
  },
  comisaria: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  lugar: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  conclusionDescripcion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusionLesiones: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusionDaños: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusionResponsabilidad: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusionCredibilidad: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusionRecomendacion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  estado: {
    type: String,
    enum: ['Sin asignar', 'Asignado', 'Activo', 'Finalizado', 'Controlado', 'Completado'],
  },
  autorizacion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  fechaFinalizacion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  statsSolicitudCorreccion: {
    type: String,
    enum: ['Muy alto', 'Alto', 'Moderado', 'Bajo', 'Nulo'],
  },
  statsGramaticaProlijidad: {
    type: String,
    enum: ['Muy alto', 'Alto', 'Moderado', 'Bajo', 'Nulo'],
  },
  statsDesarrolloSiniestro: {
    type: String,
    enum: ['Muy alto', 'Alto', 'Moderado', 'Bajo', 'Nulo'],
  },
  statsJustificacionDemoras: {
    type: String,
    enum: ['No', 'Si', 'Moderado'],
  },
  conlcusionSiniestro: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
});

module.exports = mongoose.model('siniestro', siniestroSchema);
