const express = require('express');

const router = express.Router();

const controladorController = require('../controllers/controlador');

router
  .get('/', controladorController.getControlador)
  .get('/:id', controladorController.getControladorById)
  .post('/', controladorController.postControlador)
  .put('/:id', controladorController.updateControlador)
  .delete('/:id', controladorController.deleteControlador);

module.exports = router;
