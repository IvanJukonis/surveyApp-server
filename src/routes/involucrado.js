const express = require('express');

const router = express.Router();

const involucradoController = require('../controllers/involucrado');

router
  .get('/', involucradoController.getInvolucrado)
  .get('/:id', involucradoController.getInvolucradoById)
  .post('/', involucradoController.postInvolucrado)
  .put('/:id', involucradoController.updateInvolucrado)
  .delete('/:id', involucradoController.deleteInvolucrado);

module.exports = router;
