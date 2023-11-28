const express = require('express');

const router = express.Router();

const inspeccionSiniestroController = require('../controllers/inspeccionSiniestro');

router
  .post('/', inspeccionSiniestroController.createInspeccionSiniestro)
  .get('/', inspeccionSiniestroController.getInspeccionSiniestro);

module.exports = router;
