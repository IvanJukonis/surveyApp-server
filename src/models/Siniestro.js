const mongoose = require('mongoose');

const { Schema } = mongoose;

const siniestroSchema = new Schema({
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
    maxLength: 15,
    required: true,
  },
  denuncia: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
});

module.exports = mongoose.model('siniestro', siniestroSchema);
