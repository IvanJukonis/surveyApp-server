const express = require('express');

const router = express.Router();

const relevadorController = require('../controllers/relevador');

router
  .get('/', relevadorController.getRelevador)
  .get('/:id', relevadorController.getRelevadorById)
  .post('/', relevadorController.postRelevador)
  .put('/:id', relevadorController.updateRelevador)
  .delete('/:id', relevadorController.deleteRelevador);

module.exports = router;
