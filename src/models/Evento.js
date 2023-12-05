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
    enum: [''],
    required: true,
  },
  fecha: {

  },
  hora: {

  },
  descripcion: {

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

  },
});

module.exports = mongoose.model('evento', eventoSchema);
