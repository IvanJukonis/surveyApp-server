const express = require('express');

const router = express.Router();

const involucradoController = require('../controllers/involucrado');

router
  .post('/', involucradoController.createInvolucrado)
  .get('/', involucradoController.getInvolucrado);

module.exports = router;
