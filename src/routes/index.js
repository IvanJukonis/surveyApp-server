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
const inspeccionSiniestro = require('./inspeccionSiniestro');
const inspeccionRoboRueda = require('./inspeccionRoboRueda');
const superAdmin = require('./super-admin');
const administrativo = require('./administrativo');
const consultor = require('./consultor');

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
router.use('/inspeccionSiniestro', inspeccionSiniestro);
router.use('/super-admin', superAdmin);
router.use('/administrativo', administrativo);
router.use('/inspeccionRoboRueda', inspeccionRoboRueda);
router.use('/consultor', consultor);

module.exports = router;
