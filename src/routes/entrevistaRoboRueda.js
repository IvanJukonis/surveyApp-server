const express = require('express');

const router = express.Router();

const entrevistaRoboRuedaController = require('../controllers/entrevistaRoboRueda');

router
  .post('/', entrevistaRoboRuedaController.createEntrevistaRoboRueda)
  .get('/', entrevistaRoboRuedaController.getEntrevistaRoboRueda);

module.exports = router;
