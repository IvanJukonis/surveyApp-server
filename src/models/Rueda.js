const mongoose = require('mongoose');

const { Schema } = mongoose;

const ruedaSchema = new Schema({
  descripcion: {

  },
  marca: {

  },
  numDot: {

  },
  numLlanta: {

  },
  tipo: {
    type: String,
    enum: [''],
    required: true,
  },
  tipoLlanta: {
    type: String,
    enum: [''],
    required: true,
  },
  posicion: {
    type: String,
    enum: [''],
    required: true,
  },
  fechaColocacion: {

  },
  anterior: {

  },
  actual: {

  },
  sustraida: {

  },
  prestada: {

  },
  auxiliar: {

  },
  estado: {
    type: String,
    enum: [''],
    required: true,
  },
  aporteFoto: {
    type: String,
    enum: [''],
    required: true,
  },
  metadatosFoto: {
    type: String,
    enum: [''],
    required: true,
  },
  comprobantesCompra: {
    type: String,
    enum: [''],
    required: true,
  },
  aporteComprobante: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('rueda', ruedaSchema);
