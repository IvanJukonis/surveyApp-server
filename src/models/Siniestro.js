const mongoose = require('mongoose');
const {
  dateTime,
} = require('./regex');

const { Schema } = mongoose;

const siniestroSchema = new Schema({
  numSiniestro: {

  },
  numPoliza: {

  },
  numInforme: {

  },
  fechaSiniestro: {
    ...dateTime,
  },
  fechaDenuncia: {
    ...dateTime,
  },
  fechaVencimiento: {
    ...dateTime,
  },
  fechaAsignacion: {
    ...dateTime,
  },
  hrSiniestro: {
    ...dateTime,
  },
  requerido: {
    type: String,
    enum: [''],
    required: true,
  },
  cia: {
    type: String,
    enum: [''],
    required: true,
  },
  tipo: {
    type: String,
    enum: [''],
    required: true,
  },
  relevamiento: {
    type: String,
    enum: [''],
    required: true,
  },
  instrucciones: {

  },
  denuncia: {

  },
  comisaria: {
    type: String,
    enum: [''],
    required: true,
  },
  lugar: {

  },
  conclusionDescripcion: {

  },
  conclusionLesiones: {

  },
  conclusionDaños: {

  },
  conclusionResponsabilidad: {

  },
  conclusionCredibilidad: {
    type: String,
    enum: [''],
    required: true,
  },
  conclusionRecomendacion: {
    type: String,
    enum: [''],
    required: true,
  },
  estado: {
    type: String,
    enum: [''],
    required: true,
  },
  autorizacion: {
    type: String,
    enum: [''],
    required: true,
  },
  statsSolicitudCorreccion: {

  },
  statsGramaticaProlijidad: {
    type: String,
    enum: [''],
    required: true,
  },
  statsDesarrolloSiniestro: {
    type: String,
    enum: [''],
    required: true,
  },
  fechaFinalizacion: {
    ...dateTime,
  },
  fechaContactoAsegurado: {
    ...dateTime,
  },
  fechaContactoTercero: {
    ...dateTime,
  },
  justificaDemoras: {
    type: String,
    enum: [''],
    required: true,
  },
  evaluacion: {

  },
});

module.exports = mongoose.model('siniestro', siniestroSchema);
