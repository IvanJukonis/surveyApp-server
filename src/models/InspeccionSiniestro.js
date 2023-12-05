const mongoose = require('mongoose');

const { Schema } = mongoose;

const inspeccionSiniestroSchema = new Schema({
  fotos: {
    type: String,
    enum: [''],
    required: true,
  },
  fecha: {

  },
  hora: {

  },
  permisos: {
    type: String,
    enum: [''],
    required: true,
  },
  daños: {

  },
  tipoDaños: {
    type: String,
    enum: [''],
    required: true,
  },
  descripcionDaños: {

  },
  numChasis: {

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
