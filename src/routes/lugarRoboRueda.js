const express = require('express');

const router = express.Router();

const lugarRoboRuedaController = require('../controllers/lugarRoboRueda');

router
  .post('/', lugarRoboRuedaController.createLugarRoboRueda)
  .get('/', lugarRoboRuedaController.getLugarRoboRueda);

module.exports = router;
