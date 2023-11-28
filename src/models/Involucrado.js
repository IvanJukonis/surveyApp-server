const mongoose = require('mongoose');

const { Schema } = mongoose;

const vehicleSchema = new Schema({
  involved: {
    type: [Schema.Types.ObjectId],
    ref: 'Involved',
    required: true,
  },
  dominio: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 7,
    match: /^[A-Za-z0-9\s]+$/,
  },
  marca: {
    type: String,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z0-9\s]+$/,
  },
  color: {
    type: String,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
    required: true,
  },
  uso: {
    type: String,
    enum: ['Particular', 'Profesional', 'Servicio Publico', 'Especial'],
    required: true,
  },
  año: {
    type: Number,
    minLength: 3,
    maxLength: 5,
    required: true,
  },
  descripcionDaños: {
    type: String,
    minLength: 3,
    maxLength: 50,
    match: /^[A-Za-z]+$/,
    required: true,
  },
});

module.exports = mongoose.model('vehicle', vehicleSchema);
