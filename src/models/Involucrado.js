const mongoose = require('mongoose');

const { Schema } = mongoose;

const involucradoSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  prioridad: {
    type: Boolean,
    default: true,
  },
  rol: {
    type: String,
    enum: ['CVA', 'CVT', 'PVA', 'PVT', 'TTG', 'TER', 'TVT', 'TVA', 'SOC'],
    required: true,
  },
  relacion: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  titular: {
    type: Boolean,
    default: true,
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
  dni: {
    type: Number,
    minLength: 3,
    maxLength: 8,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
    minLength: 9,
    maxLength: 12,
  },
  email: {
    type: String,
    required: true,
    match: /^[^@]+@[^@]+.[a-zA-Z]{2,}$/,
    unique: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  domicilio: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  ciudad: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  pais: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  codigoPostal: {
    type: Number,
    minLength: 3,
    maxLength: 5,
    required: true,
  },
  cuit: {
    type: Number,
    minLength: 3,
    maxLength: 15,
    required: true,
  },
  entrevistado: {
    type: Boolean,
    default: true,
  },
  ocupacion: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  direccionOcupacion: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  licenciaAportada: {
    type: Boolean,
    default: true,
  },
  licenciaVencimiento: {
    type: Date,
    required: true,
  },
  licenciaHabilitada: {
    type: Boolean,
    default: true,
  },
  licenciaCategoria: {
    type: String,
    enum: ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2', 'C3', 'D1', 'D2', 'D3', 'D4', 'E1'],
    required: true,
  },
});

module.exports = mongoose.model('involucrado', involucradoSchema);
