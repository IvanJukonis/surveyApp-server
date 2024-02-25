const mongoose = require('mongoose');

const { Schema } = mongoose;

const novedadSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: Date,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Consulta', 'Notificacion', 'Aviso', 'Respuesta'],
    required: true,
  },
  relacion: {
    type: String,
    enum: ['CVA', 'LUGAR', 'CVT', 'PVT', 'PVA', 'TVT', 'TVA', 'VA', 'VT'],
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  visibilidad: {
    type: Boolean,
    default: true,
  },
  informe: {
    type: Boolean,
    default: true,
  },
  respuesta: {
    type: Boolean,
    default: true,
  },
  responsable: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('novedad', novedadSchema);
