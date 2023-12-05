const express = require('express');

const router = express.Router();

const lugarRoboRuedaController = require('../controllers/lugarRoboRueda');

router
  .get('/', lugarRoboRuedaController.getLugarRoboRueda)
  .get('/:id', lugarRoboRuedaController.getLugarRoboRuedaById)
  .post('/', lugarRoboRuedaController.postLugarRoboRueda)
  .put('/:id', lugarRoboRuedaController.updateLugarRoboRueda)
  .delete('/:id', lugarRoboRuedaController.deleteLugarRoboRueda);

module.exports = router;
