const mongoose = require('mongoose');

const { Schema } = mongoose;

const dateTime = {
  type: Date,
  required: true,
};

const string = {
  type: String,
  minLength: 3,
  maxLength: 15,
  required: true,
};

const numbers = {
  type: Number,
  minLength: 3,
  maxLength: 10,
  required: true,
};

const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
const phoneRegex = /^\d{10}$/;
const alphanumericSpacesRegex = /^[a-zA-Z0-9\s]*$/;
// const alphaNumericRegex = /^[a-zA-Z0-9]*$/;
const alphaSpacesRegex = /^[a-zA-Z\s]*$/;
const alphaRegex = /^[a-zA-Z]*$/;

const investigatorSchema = new Schema({
  firstName: {
    ...string,
    match: alphaSpacesRegex,
  },
  lastName: {
    ...string,
    match: alphaSpacesRegex,
  },
  dni: {
    ...numbers,
    minLength: 8,
    maxLength: 8,
  },
  email: {
    type: String,
    match: emailRegex,
    required: true,
  },
  dBirthday: {
    ...dateTime,
  },
  dHire: {
    ...dateTime,
  },
  address: {
    ...string,
    match: alphanumericSpacesRegex,
  },
  city: {
    ...string,
    match: alphaSpacesRegex,
  },
  phone: {
    ...numbers,
    match: phoneRegex,
  },
  contract: {
    type: String,
    enum: ['labor', 'fijo', 'indefinido', 'aprendizaje', 'ocasional'],
    required: true,
  },
  hWork: {
    ...dateTime,
  },
  salary: {
    ...numbers,
  },
  salaryUpdate: {
    ...numbers,
  },
  dSalaryUpdate: {
    ...dateTime,
  },
  socialSecurity: {
    ...numbers,
  },
  office: {
    type: String,
    enum: ['rosario', 'buenos aires', 'cordoba', 'santa fe'],
    required: true,
  },
  department: {
    type: String,
    enum: ['relevamientos', 'control', 'administrador'],
    required: true,
  },
  position: {
    type: String,
    enum: ['relevador', 'controlador', 'administrador', 'consultor', 'gerente'],
    required: true,
  },
  children: {
    ...numbers,
  },
  maritalStatus: {
    type: String,
    enum: ['casado', 'soltero', 'viuda', 'divorciado'],
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  bankAccount: {
    ...numbers,
  },
  password: {
    ...string,
    match: alphaRegex,
  },
  repeatPassword: {
    ...string,
    match: alphaRegex,
  },
  promedioDiasSiniestro: {
    ...numbers,
  },
  promedioFaltasSiniestro: {
    ...numbers,
  },
  indiceProlijidad: {
    ...numbers,
  },
  indiceDesarrollo: {
    ...numbers,
  },
  siniestrosMensuales: {
    ...numbers,
  },
  siniestrosAnuales: {
    ...numbers,
  },
});

module.exports = mongoose.model('investigator', investigatorSchema);
