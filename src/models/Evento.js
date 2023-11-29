const mongoose = require('mongoose');
const {
  dateTime,
  string,
} = require('./regex');

const { Schema } = mongoose;

const eventoSchema = new Schema({
  visibilidadEntrevista: {
    type: Boolean,
    default: false,
  },
  visibilidadInforme: {
    type: Boolean,
    default: false,
  },
  tipo: {
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
  descripcion: {
    ...string,
  },
  comprobar: {
    type: String,
    enum: [''],
    required: true,
  },
  comprobado: {
    type: String,
    enum: [''],
    required: true,
  },
  comprobable: {
    type: String,
    enum: [''],
    required: true,
  },
  resolucion: {
    ...string,
  },
});

module.exports = mongoose.model('evento', eventoSchema);
