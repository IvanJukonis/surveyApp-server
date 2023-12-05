const express = require('express');

const router = express.Router();

const inspeccionRoboRuedaController = require('../controllers/inspeccionRoboRueda');

router
  .get('/', inspeccionRoboRuedaController.getInspeccionRoboRueda)
  .get('/:id', inspeccionRoboRuedaController.getInspeccionRoboRuedaById)
  .post('/', inspeccionRoboRuedaController.postInspeccionRoboRueda)
  .put('/:id', inspeccionRoboRuedaController.updateInspeccionRoboRueda)
  .delete('/:id', inspeccionRoboRuedaController.deleteInspeccionRoboRueda);

module.exports = router;
