const express = require('express');

const router = express.Router();

const inspeccionSiniestroController = require('../controllers/inspeccionSiniestro');

router
  .get('/', inspeccionSiniestroController.getInspeccionSiniestro)
  .get('/:id', inspeccionSiniestroController.getInspeccionSiniestroById)
  .post('/', inspeccionSiniestroController.postInspeccionSiniestro)
  .put('/:id', inspeccionSiniestroController.updateInspeccionSiniestro)
  .delete('/:id', inspeccionSiniestroController.deleteInspeccionSiniestro);

module.exports = router;
