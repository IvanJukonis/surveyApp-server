const express = require('express');

const router = express.Router();

const relevadorController = require('../controllers/relevador');

router
  .post('/', relevadorController.createRelevador)
  .get('/', relevadorController.getRelevador);

module.exports = router;
