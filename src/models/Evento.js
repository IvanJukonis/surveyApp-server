const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventoSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
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
    maxLength: 200,
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
    type: String,
    enum: ['Totalmente comprobable', 'Comprobable', 'Parcialmente comprobable', 'No comprobable'],
    required: true,
  },
  predisposicion: {
    type: String,
    enum: ['Buena', 'Media', 'Mala', 'Negacion'],
    required: true,
  },
  resolucion: {
    type: String,
    minLength: 3,
    maxLength: 200,
  },
});

module.exports = mongoose.model('evento', eventoSchema);
