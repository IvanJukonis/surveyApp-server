const express = require('express');

const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');

const controladorController = require('../controllers/controlador');

router
  .get('/', verifyToken, controladorController.getControlador)
  .get('/:id', verifyToken, controladorController.getControladorById)
  .post('/', controladorController.postControlador)
  .put('/:id', controladorController.updateControlador)
  .delete('/:id', controladorController.deleteControlador);

module.exports = router;
