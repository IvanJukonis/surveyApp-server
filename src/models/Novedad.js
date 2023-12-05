const mongoose = require('mongoose');

const { Schema } = mongoose;

const novedadSchema = new Schema({
  fecha: {

  },
  hora: {

  },
  titulo: {

  },
  tipo: {
    type: String,
    enum: [''],
    required: true,
  },
  relacion: {
    type: String,
    enum: [''],
    required: true,
  },
  descripcion: {

  },
  visibilidad: {
    type: String,
    enum: [''],
    required: true,
  },
  respuesta: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('novedad', novedadSchema);
