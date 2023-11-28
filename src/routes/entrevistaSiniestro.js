const express = require('express');

const router = express.Router();

const entrevistaSiniestroController = require('../controllers/entrevistaSiniestro');

router
  .post('/', entrevistaSiniestroController.createEntrevistaSiniestro)
  .get('/', entrevistaSiniestroController.getEntrevistaSiniestro);

module.exports = router;
