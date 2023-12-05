const mongoose = require('mongoose');

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

  },
  apelido: {

  },
  dni: {

  },
  telefono: {

  },
  email: {

  },
  fechaNacimiento: {

  },
  domicilio: {

  },
  ciudad: {

  },
  pais: {

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

  },
  direccionOcupacion: {

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
