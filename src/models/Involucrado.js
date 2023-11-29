const mongoose = require('mongoose');
const {
  dateTime,
  string,
} = require('./regex');

const { Schema } = mongoose;

const involucradoSchema = new Schema({
  prioridad: {

  },
  rol: {
    type: String,
    enum: [''],
    required: true,
  },
  relacion: {
    type: String,
    enum: [''],
    required: true,
  },
  titular: {
    type: String,
    enum: [''],
    required: true,
  },
  nombre: {
    ...string,
  },
  apelido: {
    ...string,
  },
  dni: {

  },
  telefono: {

  },
  email: {

  },
  fechaNacimiento: {
    ...dateTime,
  },
  domicilio: {
    ...string,
  },
  ciudad: {
    ...string,
  },
  pais: {
    ...string,
  },
  codigoPostal: {

  },
  cuit: {

  },
  entrevistado: {
    type: String,
    enum: [''],
    required: true,
  },
  ocupacion: {
    ...string,
  },
  direccionOcupacion: {
    ...string,
  },
  relacionSiniestro: {
    type: String,
    enum: [''],
    required: true,
  },
  licenciaAportada: {
    type: String,
    enum: [''],
    required: true,
  },
  licenciaVencimiento: {
    ...dateTime,
  },
  licenciaHabilitada: {
    type: String,
    enum: [''],
    required: true,
  },
  licenciaCategoria: {
    type: String,
    enum: [''],
    required: true,
  },
});

module.exports = mongoose.model('involucrado', involucradoSchema);
