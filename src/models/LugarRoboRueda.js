const mongoose = require('mongoose');

const { Schema } = mongoose;

const lugarRoboRuedaSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  prioridad: {
    type: Boolean,
    default: false,
  },
  direccion: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  ciudad: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  provincia: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  evidenciaDanos: {
    type: Boolean,
    default: false,
  },
  permiso: {
    type: Boolean,
    default: false,
  },
  perros: {
    type: Boolean,
    default: false,
  },
  alarma: {
    type: Boolean,
    default: false,
  },
  presencia: {
    type: Boolean,
    default: false,
  },
  disposicionVehiculo: {
    type: String,
    enum: ['Apoyado sin daños', 'Apoyado con daños', 'Suelo sin soporte'],
    required: true,
  },
  usoEntorno: {
    type: Boolean,
    default: false,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
});

module.exports = mongoose.model('lugarRoboRueda', lugarRoboRuedaSchema);
