const mongoose = require('mongoose');
const {
  dateTime,
  string,
} = require('./regex');

const { Schema } = mongoose;

const inspeccionRoboRuedaSchema = new Schema({
  fotos: {
    type: String,
    enum: ['Se toman fotografias del VH', 'No se toman fotografias del VH'],
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
  disposicion: {
    ...string,
  },
  descripcion: {
    ...string,
  },
});

module.exports = mongoose.model('inspeccionRoboRueda', inspeccionRoboRuedaSchema);
