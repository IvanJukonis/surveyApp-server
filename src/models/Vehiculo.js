const mongoose = require('mongoose');

const { Schema } = mongoose;

const vehiculoSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  rol: {
    type: String,
    enum: ['VA', 'VT', 'VT2', 'VT3', 'VAd'],
    required: true,
  },
  prioridad: {
    type: Boolean,
    default: false,
  },
  dominio: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  uso: {
    type: String,
    enum: ['Particular', 'Profesional', 'Servicio', 'Otro'],
    required: true,
  },
  fabricacion: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Automovil', 'Camioneta', 'Motocicleta', 'Bicicleta', 'Cuatrimoto', 'Camion', 'Otro'],
    required: true,
  },
  fechaAdquisicion: {
    type: Date,
    required: true,
  },
  danos: {
    type: String,
    enum: ['Graves', 'Leves', 'Medios', 'Sin Daños'],
    required: true,
  },
  descripcionDanos: {
    type: String,
    required: true,
  },
  alarma: {
    type: String,
    enum: ['Con alarma (Activada)', 'Con alarma (Desactivada)', 'Sin alarma'],
    required: true,
  },
  cierreCentralizado: {
    type: String,
    enum: ['Con cierre (Activado)', 'Con cierre (Desactivado)', 'Sin cierre'],
    required: true,
  },
});

module.exports = mongoose.model('vehiculo', vehiculoSchema);
