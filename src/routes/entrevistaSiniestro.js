const express = require('express');

const router = express.Router();

const entrevistaSiniestroController = require('../controllers/entrevistaSiniestro');

router
  .get('/', entrevistaSiniestroController.getEntrevistaSiniestro)
  .get('/:id', entrevistaSiniestroController.getEntrevistaSiniestroById)
  .post('/', entrevistaSiniestroController.postEntrevistaSiniestro)
  .put('/:id', entrevistaSiniestroController.updateEntrevistaSiniestro)
  .delete('/:id', entrevistaSiniestroController.deleteEntrevistaSiniestro);

module.exports = router;
