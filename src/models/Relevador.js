const mongoose = require('mongoose');
const {
  dateTime,
} = require('./regex');

const { Schema } = mongoose;

const relevadorSchema = new Schema({
  tipo: {
    type: String,
    enum: [''],
    required: true,
  },
  nombre: {

  },
  apellido: {

  },
  email: {

  },
  dni: {

  },
  fechaNacimiento: {
    ...dateTime,
  },
  fechaContratacion: {
    ...dateTime,
  },
  direccion: {

  },
  localidad: {

  },
  telefono: {

  },
  contrato: {
    type: String,
    enum: [''],
    required: true,
  },
  hsLaborales: {
    ...dateTime,
  },
  salario: {

  },
  fechaActualizacionSalario: {
    ...dateTime,
  },
  numeroSeguridadSocial: {

  },
  oficina: {
    type: String,
    enum: [''],
    required: true,
  },
  departamento: {
    type: String,
    enum: [''],
    required: true,
  },
  puesto: {
    type: String,
    enum: [''],
    required: true,
  },
  cantidadHijos: {

  },
  estadoCivil: {
    type: String,
    enum: [''],
    required: true,
  },
  activo: {

  },
  cuentaBancaria: {

  },
  nombreUsuario: {

  },
  contraseña: {

  },
});

module.exports = mongoose.model('relevador', relevadorSchema);
