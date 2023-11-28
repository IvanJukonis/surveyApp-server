const express = require('express');

const router = express.Router();

const eventoController = require('../controllers/evento');

router
  .post('/', eventoController.createEvento)
  .get('/', eventoController.getEvento);

module.exports = router;
