const mongoose = require('mongoose');

const { Schema } = mongoose;

const inspeccionRoboRuedaSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  rueda: {
    type: [Schema.Types.ObjectId],
    ref: 'Rueda',
    required: true,
  },
  involucrado: {
    type: [Schema.Types.ObjectId],
    ref: 'Involucrado',
  },
  vehiculo: {
    type: [Schema.Types.ObjectId],
    ref: 'Vehiculo',
    required: true,
  },
  fecha: {
    type: Date,
  },
  hora: {
    type: Date,
  },
  presencia: {
    type: Boolean,
    default: false,
  },
  direccion: {
    type: String,
    minLength: 3,
    maxLength: 30,
  },
  ciudad: {
    type: String,
    minLength: 3,
    maxLength: 30,
  },
  permiso: {
    type: String,
    enum: ['Inspeccion permitida', 'Inspeccion no permitida', 'Inspeccion dificultada'],
    required: true,
  },
  programada: {
    type: String,
    enum: ['Inspeccion programada', 'Inspeccion no programada', 'Inspeccion neutra'],
    required: true,
  },
  resultado: {
    type: String,
    enum: ['Inconsistencias', 'Sin inconsistencias', 'Fraudulencia'],
    required: true,
  },
  disposicion: {
    type: String,
    minLength: 3,
    maxLength: 100,
  },
  daños: {
    type: String,
    minLength: 3,
    maxLength: 100,
  },
  conclusion: {
    type: String,
    minLength: 3,
    maxLength: 200,
  },
});

module.exports = mongoose.model('inspeccionRoboRueda', inspeccionRoboRuedaSchema);
