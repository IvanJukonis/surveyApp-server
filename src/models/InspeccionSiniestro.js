const mongoose = require('mongoose');
const {
  dateTime,
  string,
} = require('./regex');

const { Schema } = mongoose;

const inspeccionSiniestroSchema = new Schema({
  fotos: {
    type: String,
    enum: [''],
    required: true,
  },
  fecha: {
    ...dateTime,
  },
  hora: {
    ...dateTime,
  },
  permisos: {
    type: String,
    enum: [''],
    required: true,
  },
  daños: {
    ...string,
  },
  tipoDaños: {
    type: String,
    enum: [''],
    required: true,
  },
  descripcionDaños: {
    ...string,
  },
  numChasis: {
    ...string,
  },
  reparacion: {
    type: String,
    enum: [''],
    required: true,
  },
  coincidenciaDaños: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('inspeccionSiniestro', inspeccionSiniestroSchema);
