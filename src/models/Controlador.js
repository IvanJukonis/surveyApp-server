const mongoose = require('mongoose');

const { Schema } = mongoose;

const controladorSchema = new Schema({
  firebaseUid: {
    type: String,
  },
  tipo: {
    type: String,
    enum: ['Relevador', 'Controlador', 'Administrativo', 'Consultor'],
    required: true,
  },
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  apellido: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[^@]+@[^@]+.[a-zA-Z]{2,}$/,
    unique: true,
  },
  dni: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  fechaContratacion: {
    type: Date,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  localidad: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  telefono: {
    type: Number,
    required: true,
    minLength: 9,
    maxLength: 12,
  },
  contrato: {
    type: String,
    enum: ['Termino Fijo', 'Termino Indefinido', 'Termino Temporal', 'Labor'],
    required: true,
  },
  hsLaborales: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  salario: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  fechaActualizacionSalario: {
    type: Date,
    required: true,
  },
  numeroSeguridadSocial: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  oficina: {
    type: String,
    enum: ['Rosario', 'Vgg', 'San Lorenzo'],
    required: true,
  },
  departamento: {
    type: String,
    enum: ['Administracion', 'Produccion', 'Marketing', 'RRHH'],
    required: true,
  },
  puesto: {
    type: String,
    enum: ['Gerente', 'Empleado'],
    required: true,
  },
  cantidadHijos: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  estadoCivil: {
    type: String,
    enum: ['Casado/a', 'Soltero/a', 'Viudo/a', 'Divorciado/a'],
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
  cuentaBancaria: {
    type: Number,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
});

module.exports = mongoose.model('controlador', controladorSchema);
