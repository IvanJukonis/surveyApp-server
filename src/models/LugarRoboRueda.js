const mongoose = require('mongoose');
const { string } = require('./regex');

const { Schema } = mongoose;

const lugarRoboRuedaSchema = new Schema({
  prioridad: {
    ...string,
  },
  direccion: {
    ...string,
  },
  ciudad: {
    ...string,
  },
  provincia: {
    ...string,
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
