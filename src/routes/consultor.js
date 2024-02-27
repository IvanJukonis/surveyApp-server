const express = require('express');

const router = express.Router();

const consultorController = require('../controllers/consultor');

router
  .get('/', consultorController.getConsultor)
  .get('/:id', consultorController.getConsultorById)
  .post('/', consultorController.postConsultor)
  .put('/:id', consultorController.updateConsultor)
  .delete('/:id', consultorController.deleteConsultor);
module.exports = router;
