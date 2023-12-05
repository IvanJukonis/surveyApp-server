const mongoose = require('mongoose');

const { Schema } = mongoose;

const inspeccionRoboRuedaSchema = new Schema({
  fotos: {
    type: String,
    enum: ['Se toman fotografias del VH', 'No se toman fotografias del VH'],
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
  disposicion: {

  },
  descripcion: {

  },
});

module.exports = mongoose.model('inspeccionRoboRueda', inspeccionRoboRuedaSchema);
