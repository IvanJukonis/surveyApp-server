const express = require('express');

const router = express.Router();

const novedadController = require('../controllers/novedad');

router
  .get('/', novedadController.getNovedad)
  .get('/:id', novedadController.getNovedadById)
  .post('/', novedadController.postNovedad)
  .put('/:id', novedadController.updateNovedad)
  .delete('/:id', novedadController.deleteNovedad);

module.exports = router;
