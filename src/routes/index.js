const express = require('express');

const entrevistaRoboRueda = require('./entrevistaRoboRueda');
const entrevistaSiniestro = require('./entrevistaSiniestro');
const vehiculo = require('./vehiculo');
const relevador = require('./relevador');
const involucrado = require('./involucrado');
const lugarRoboRueda = require('./lugarRoboRueda');
const lugarSiniestro = require('./lugarSiniestro');
const rueda = require('./rueda');
const evento = require('./evento');
const novedad = require('./novedad');

const router = express.Router();

router.use('/entrevistaRoboRueda', entrevistaRoboRueda);
router.use('/entrevistaSiniestro', entrevistaSiniestro);
router.use('/vehiculo', vehiculo);
router.use('/relevador', relevador);
router.use('/involucrado', involucrado);
router.use('/lugarRoboRueda', lugarRoboRueda);
router.use('/lugarSiniestro', lugarSiniestro);
router.use('/rueda', rueda);
router.use('/evento', evento);
router.use('/novedad', novedad);

module.exports = router;
