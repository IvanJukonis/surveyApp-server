const express = require('express');

const router = express.Router();

const siniestroController = require('../controllers/siniestro');

router
  .post('/', siniestroController.createSiniestro)
  .get('/', siniestroController.getSiniestro);

module.exports = router;
