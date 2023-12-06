const mongoose = require('mongoose');

const { Schema } = mongoose;

const controladorSchema = new Schema({
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

  },
  fechaContratacion: {

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

  },
  salario: {

  },
  fechaActualizacionSalario: {

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

module.exports = mongoose.model('controlador', controladorSchema);
