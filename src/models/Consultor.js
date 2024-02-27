const mongoose = require('mongoose');

const { Schema } = mongoose;

const consultorSchema = new Schema({
  firebaseUid: {
    type: String,
  },
  tipo: {
    type: String,
    enum: ['Relevador', 'Controlador', 'Administrativo', 'Consultor'],
    required: true,
  },
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  apellido: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[^@]+@[^@]+.[a-zA-Z]{2,}$/,
    unique: true,
  },
  dni: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
  atendido: {
    type: Boolean,
    default: true,
  },
  aseguradora: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
});

module.exports = mongoose.model('consultor', consultorSchema);
