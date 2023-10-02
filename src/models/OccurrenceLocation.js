const mongoose = require('mongoose');

const { Schema } = mongoose;

const ocurrenceLocationSchema = new Schema({
  calleVA: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  calleVT: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  direccionVA: {
    type: String,
    enum: ['SUR', 'NORTE', 'ESTE', 'OESTE', 'NORESTE', 'SURESTE', 'SUROESTE', 'NOROESTE', 'SURESTE'],
    required: true,
  },
  direccionVT: {
    type: String,
    enum: ['SUR', 'NORTE', 'ESTE', 'OESTE', 'NORESTE', 'SURESTE', 'SUROESTE', 'NOROESTE', 'SURESTE'],
    required: true,
  },
  direccionCalleVA: {
    type: String,
    enum: ['SUR', 'NORTE', 'ESTE', 'OESTE', 'NORESTE', 'SURESTE', 'SUROESTE', 'NOROESTE', 'SURESTE'],
    required: true,
  },
  direccionCalleVT: {
    type: String,
    enum: ['SUR', 'NORTE', 'ESTE', 'OESTE', 'NORESTE', 'SURESTE', 'SUROESTE', 'NOROESTE', 'SURESTE'],
    required: true,
  },
  estadoCalleVA: {
    type: String,
    enum: ['TIERRA', 'ASFALTO', 'PAVIMENTO', 'PIEDRAS', 'INDEFINIDO'],
    required: true,
  },
  estadoCalleVT: {
    type: String,
    enum: ['TIERRA', 'ASFALTO', 'PAVIMENTO', 'PIEDRAS', 'INDEFINIDO'],
    required: true,
  },
  calleAdicional: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  direccionCalleAdicional: {
    type: String,
    enum: ['SUR', 'NORTE', 'ESTE', 'OESTE', 'NORESTE', 'SURESTE', 'SUROESTE', 'NOROESTE', 'SURESTE'],
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
  localidad: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    match: /^[A-Za-z]+$/,
  },
});

module.exports = mongoose.model('ocurrenceLocation', ocurrenceLocationSchema);
