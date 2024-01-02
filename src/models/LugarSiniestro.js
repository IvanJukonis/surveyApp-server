const mongoose = require('mongoose');

const { Schema } = mongoose;

const lugarSiniestroSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  prioridad: {
    type: Boolean,
    default: false,
  },
  calleVa: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  direccionVa: {
    type: String,
    enum: ['SUR', 'ESTE', 'OESTE', 'NORTE', 'SUDOESTE', 'NOROESTE', 'NORESTE', 'SUDESTE'],
    required: true,
  },
  direcionCalleVa: {
    type: String,
    enum: ['SUR', 'ESTE', 'OESTE', 'NORTE', 'SUDOESTE', 'NOROESTE', 'NORESTE', 'SUDESTE'],
    required: true,
  },
  estadoCalleVa: {
    type: String,
    enum: ['Buen', 'Regular', 'Mal'],
    required: true,
  },
  tipoCalleVa: {
    type: String,
    enum: ['Asfalto', 'Tierra', 'Pavimento', 'Grava', 'Piedra'],
    required: true,
  },
  badenCalleVa: {
    type: Boolean,
    default: false,
  },
  semaforoCalleVa: {
    type: Boolean,
    default: false,
  },
  cartelPareCalleVa: {
    type: Boolean,
    default: false,
  },
  camaraCalleVa: {
    type: Boolean,
    default: false,
  },
  calleVt: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  direccionVt: {
    type: String,
    enum: ['SUR', 'ESTE', 'OESTE', 'NORTE', 'SUDOESTE', 'NOROESTE', 'NORESTE', 'SUDESTE'],
    required: true,
  },
  direccionCalleVt: {
    type: String,
    enum: ['SUR', 'ESTE', 'OESTE', 'NORTE', 'SUDOESTE', 'NOROESTE', 'NORESTE', 'SUDESTE'],
    required: true,
  },
  estadoCalleVt: {
    type: String,
    enum: ['Buen', 'Regular', 'Mal'],
    required: true,
  },
  tipoCalleVt: {
    type: String,
    enum: ['Asfalto', 'Tierra', 'Pavimento', 'Grava', 'Piedra'],
    required: true,
  },
  badenCalleVt: {
    type: Boolean,
    default: false,
  },
  semaforoCalleVt: {
    type: Boolean,
    default: false,
  },
  cartelPareCalleVt: {
    type: Boolean,
    default: false,
  },
  camaraCalleVt: {
    type: Boolean,
    default: false,
  },
  calleAd: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  ciudad: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  provincia: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
});

module.exports = mongoose.model('lugarSiniestro', lugarSiniestroSchema);
