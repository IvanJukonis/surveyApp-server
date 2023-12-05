const mongoose = require('mongoose');

const { Schema } = mongoose;

const lugarRoboRuedaSchema = new Schema({
  prioridad: {

  },
  direccion: {

  },
  ciudad: {

  },
  provincia: {

  },
  evidenciaDanos: {
    type: String,
    enum: [''],
    required: true,
  },
  permiso: {
    type: String,
    enum: [''],
    required: true,
  },
  perros: {
    type: String,
    enum: [''],
    required: true,
  },
  alarma: {
    type: String,
    enum: [''],
    required: true,
  },
  presencia: {
    type: String,
    enum: [''],
    required: true,
  },
  disposicionVehiculo: {
    type: String,
    enum: [''],
    required: true,
  },
  usoEntorno: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('lugarRoboRueda', lugarRoboRuedaSchema);
