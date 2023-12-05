const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrevistaSiniestroSchema = new Schema({
  fechaEntrevista: {

  },
  hrEntrevista: {

  },
  rol: {
    type: String,
    enum: [''],
    required: true,
  },
  firma: {
    type: Boolean,
    default: false,
  },
  tipoEntrevista: {
    type: String,
    enum: [''],
    required: true,
  },
  fechaSiniestro: {

  },
  hrAproximada: {

  },
  hrNotificacion: {

  },
  hrConfirmacion: {

  },
  hrReclamo: {

  },
  relacionVh: {
    type: String,
    enum: [''],
    required: true,
  },
  habilitacionDni: {
    type: String,
    enum: [''],
    required: true,
  },
  habilitacionLc: {
    type: String,
    enum: [''],
    required: true,
  },
  habilitacionTv: {
    type: String,
    enum: [''],
    required: true,
  },
  habilitacionTa: {
    type: String,
    enum: [''],
    required: true,
  },
  aportaDni: {
    type: String,
    enum: [''],
    required: true,
  },
  aportaLc: {
    type: String,
    enum: [''],
    required: true,
  },
  aportaTv: {
    type: String,
    enum: [''],
    required: true,
  },
  aportaTa: {
    type: String,
    enum: [''],
    required: true,
  },
  lesiones: {
    type: String,
    enum: [''],
    required: true,
  },
  reparaciones: {
    type: String,
    enum: [''],
    required: true,
  },
  comprobantesDaños: {
    type: String,
    enum: [''],
    required: true,
  },
  tipoLesiones: {
    type: String,
    enum: [''],
    required: true,
  },
  descLesiones: {

  },
  comprobantesLesiones: {
    type: String,
    enum: [''],
    required: true,
  },
  aporteLesiones: {
    type: String,
    enum: [''],
    required: true,
  },
  fotosLesiones: {
    type: String,
    enum: [''],
    required: true,
  },
  gastos: {
    type: String,
    enum: [''],
    required: true,
  },
  descGastos: {

  },
  comprobantesGastos: {
    type: String,
    enum: [''],
    required: true,
  },
  zonaImpactoVa: {
    type: String,
    enum: [''],
    required: true,
  },
  zonaImpactoVt: {
    type: String,
    enum: [''],
    required: true,
  },
  relato: {

  },
});

module.exports = mongoose.model('entrevistaSiniestro', entrevistaSiniestroSchema);
