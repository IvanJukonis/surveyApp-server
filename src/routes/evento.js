const express = require('express');

const router = express.Router();

const eventoController = require('../controllers/evento');

router
  .get('/', eventoController.getEvento)
  .get('/:id', eventoController.getEventoById)
  .post('/', eventoController.postEvento)
  .put('/:id', eventoController.updateEvento)
  .delete('/:id', eventoController.deleteEvento);

module.exports = router;
