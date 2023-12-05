const express = require('express');

const router = express.Router();

const entrevistaRoboRuedaController = require('../controllers/entrevistaRoboRueda');

router
  .get('/', entrevistaRoboRuedaController.getEntrevistaRoboRueda)
  .get('/:id', entrevistaRoboRuedaController.getEntrevistaRoboRuedaById)
  .post('/', entrevistaRoboRuedaController.postEntrevistaRoboRueda)
  .put('/:id', entrevistaRoboRuedaController.updateEntrevistaRoboRueda)
  .delete('/:id', entrevistaRoboRuedaController.deleteEntrevistaRoboRueda);

module.exports = router;
