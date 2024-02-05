const mongoose = require('mongoose');

const { Schema } = mongoose;

const lugarRoboRuedaSchema = new Schema({
  siniestro: {
    type: [Schema.Types.ObjectId],
    ref: 'Siniestro',
    required: true,
  },
  entrevistaRoboRueda: {
    type: [Schema.Types.ObjectId],
    ref: 'EntrevistaRoboRueda',
  },
  prioridad: {
    type: Boolean,
    default: false,
  },
  direccion: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  ciudad: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  provincia: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  evidenciaDanos: {
    type: String,
    enum: ['Daños visibles', 'Sin daños', 'Daños inconsistentes'],
    required: true,
  },
  daños: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  inspeccion: {
    type: Boolean,
    default: false,
  },
  permiso: {
    type: String,
    enum: ['Permitida', 'Dificultada', 'No permitida'],
    required: true,
  },
  mascotas: {
    type: String,
    enum: ['Proteccion de mascotas', 'Sin proteccion de mascotas', 'Mascotas alertando'],
    required: true,
  },
  zona: {
    type: String,
    enum: ['Muy transitada', 'Medianamente transitada', 'Poco transitada', ' Transito nulo'],
    required: true,
  },
  alarma: {
    type: String,
    enum: ['Activada', 'Desactivada', 'Desconoce', 'Probablemente activa'],
    required: true,
  },
  testigos: {
    type: String,
    enum: ['Encontrados', 'No encontrados', 'No colaboradores'],
    required: true,
  },
  presencia: {
    type: Boolean,
    default: false,
  },
  disposicionVehiculo: {
    type: String,
    enum: ['Apoyado sin daños', 'Apoyado con daños', 'Suelo sin soporte', 'Suelo acomodado', 'Acomodado'],
    required: true,
  },
  usoEntorno: {
    type: String,
    enum: ['No utilzado', 'Utilizado', 'Sin evidencia'],
    required: true,
  },
  descripcion: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
});

module.exports = mongoose.model('lugarRoboRueda', lugarRoboRuedaSchema);
