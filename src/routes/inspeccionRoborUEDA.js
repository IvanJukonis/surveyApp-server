const express = require('express');

const router = express.Router();

const inspeccionRoboRuedaController = require('../controllers/inspeccionRoboRueda');

router
  .post('/', inspeccionRoboRuedaController.createInspeccionRoboRueda)
  .get('/', inspeccionRoboRuedaController.getInspeccionRoboRueda);

module.exports = router;
