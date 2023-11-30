const express = require('express');

const router = express.Router();

const siniestroController = require('../controllers/siniestro');

router
  .get('/', siniestroController.getSiniestro)
  .get('/:id', siniestroController.getSiniestroById)
  .post('/', siniestroController.createSiniestro)
  .put('/:id', siniestroController.updateSiniestro)
  .delete('/:id', siniestroController.deleteSiniestro);

module.exports = router;
