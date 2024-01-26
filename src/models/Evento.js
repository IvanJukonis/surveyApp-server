const mongoose = require('mongoose');

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
    enum: ['Acontesimiento', 'Sospecha'],
    required: true,
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: Date,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  comprobar: {
    type: String,
    enum: ['A comprobar', 'Sin necesidad', 'Comprobado', 'No comprobado'],
    required: true,
  },
  comprobado: {
    type: Boolean,
    default: false,
  },
  comprobable: {
    type: Boolean,
    default: false,
  },
  resolucion: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
});

module.exports = mongoose.model('evento', eventoSchema);
