const express = require('express');
const administrativoControllers = require('../controllers/administrativo');

const router = express.Router();

router
  .get('/', administrativoControllers.getAdministrativos)
  .get('/:id', administrativoControllers.getAdministrativosById)
  .post('/', administrativoControllers.postAdministrativo)
  .put('/:id', administrativoControllers.updateAdministrativo)
  .delete('/:id', administrativoControllers.deleteAdministrativo);

module.exports = router;
