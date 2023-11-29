const mongoose = require('mongoose');
const {
  dateTime,
} = require('./regex');

const { Schema } = mongoose;

const vehiculoSchema = new Schema({
  rol: {
    type: String,
    enum: [''],
    required: true,
  },
  prioridad: {

  },
  dominio: {

  },
  marca: {

  },
  modelo: {

  },
  color: {

  },
  uso: {
    type: String,
    enum: [''],
    required: true,
  },
  fabricacion: {
    ...dateTime,
  },
  tipo: {
    type: String,
    enum: [''],
    required: true,
  },
  fechaAdquisicion: {
    ...dateTime,
  },
  danos: {
    type: String,
    enum: [''],
    required: true,
  },
  descripcionDanos: {

  },
  alarma: {
    type: String,
    enum: [''],
    required: true,
  },
  cierreCentralizado: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('vehiculo', vehiculoSchema);
