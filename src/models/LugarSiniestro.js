const mongoose = require('mongoose');

const { Schema } = mongoose;

const lugarSiniestroSchema = new Schema({
  prioridad: {

  },
  calleVa: {

  },
  direccionVa: {
    type: String,
    enum: [''],
    required: true,
  },
  direcionCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  estadoCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  tipoCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  badenCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  semaforoCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  cartelPareCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  camaraCalleVa: {
    type: String,
    enum: [''],
    required: true,
  },
  calleVt: {

  },
  direccionVt: {
    type: String,
    enum: [''],
    required: true,
  },
  direccionCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  estadoCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  tipoCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  badenCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  semaforoCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  cartelPareCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  camaraCalleVt: {
    type: String,
    enum: [''],
    required: true,
  },
  ciudad: {

  },
  provincia: {

  },
  descripcion: {

  },
});

module.exports = mongoose.model('lugarSiniestro', lugarSiniestroSchema);
