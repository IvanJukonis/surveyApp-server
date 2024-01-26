const mongoose = require('mongoose');

const { Schema } = mongoose;

const inspeccionRoboRuedaSchema = new Schema({
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
  permisos: {
    type: String,
    enum: ['Inspeccion permitida', 'Inspeccion no permitida', 'Inspeccion dificultada'],
    required: true,
  },
  programada: {
    type: String,
    enum: ['Inspeccion programada', 'Inspeccion no programada'],
    required: true,
  },
  disposicion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  daños: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  conclusion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
});

module.exports = mongoose.model('inspeccionRoboRueda', inspeccionRoboRuedaSchema);
