const express = require('express');

const entrevistaRoboRueda = require('./entrevistaRoboRueda');
const entrevistaSiniestro = require('./entrevistaSiniestro');
const vehiculo = require('./vehiculo');
const relevador = require('./relevador');
const involucrado = require('./involucrado');
const controlador = require('./controlador');
const lugarRoboRueda = require('./lugarRoboRueda');
const lugarSiniestro = require('./lugarSiniestro');
const rueda = require('./rueda');
const evento = require('./evento');
const novedad = require('./novedad');
const siniestro = require('./siniestro');

const router = express.Router();

router.use('/entrevistaRoboRueda', entrevistaRoboRueda);
router.use('/entrevistaSiniestro', entrevistaSiniestro);
router.use('/vehiculo', vehiculo);
router.use('/relevador', relevador);
router.use('/controlador', controlador);
router.use('/involucrado', involucrado);
router.use('/lugarroboRueda', lugarRoboRueda);
router.use('/lugarsiniestro', lugarSiniestro);
router.use('/rueda', rueda);
router.use('/evento', evento);
router.use('/novedad', novedad);
router.use('/siniestro', siniestro);

module.exports = router;
