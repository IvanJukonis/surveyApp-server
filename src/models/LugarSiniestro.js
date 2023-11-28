const mongoose = require('mongoose');

const { Schema } = mongoose;

const involvedSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  apellido: {
    type: String,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
    required: true,
  },
  DNI: {
    type: Number,
    length: 8,
    required: true,
  },
  telefono: {
    type: String,
    length: 10,
    required: true,
  },
  email: {
    type: String,
    match: /^[^@]+@[^@]+.[a-zA-Z]{2,}$/,
    required: true,
  },
  ciudad: {
    type: String,
    minLength: 2,
    maxLength: 10,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['CVA', 'CVT', 'PVA', 'PVT', 'TTG', 'TERCERO', 'ABOG'],
    required: true,
  },
  lesiones: {
    type: String,
    enum: ['Lesiones GRAVES', 'Lesiones LEVES', 'Lesiones REGULARES'],
    required: true,
  },
  dañosInvolucrado: {
    type: String,
    enum: ['GRAVES', 'LEVES', 'REGULARES'],
    required: true,
  },
  fechaDeNacimiento: {
    type: Date,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  aportaDNI: {
    type: Boolean,
    default: false,
  },
  aportaLC: {
    type: Boolean,
    default: false,
  },
  aportaDoc: {
    type: Boolean,
    default: false,
  },
  aportaLesiones: {
    type: Boolean,
    default: false,
  },
  aportaGastos: {
    type: Boolean,
    default: false,
  },
  pais: {
    type: String,
    length: 10,
    required: true,
  },
});

module.exports = mongoose.model('involved', involvedSchema);
