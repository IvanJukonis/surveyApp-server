const express = require('express');

const router = express.Router();

const novedadController = require('../controllers/novedad');

router
  .post('/', novedadController.createNovedad)
  .get('/', novedadController.getNovedad);

module.exports = router;
