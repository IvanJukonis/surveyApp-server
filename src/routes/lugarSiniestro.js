const express = require('express');

const router = express.Router();

const lugarSiniestroController = require('../controllers/lugarSiniestro');

router
  .get('/', lugarSiniestroController.getLugarSiniestro)
  .get('/:id', lugarSiniestroController.getLugarSiniestroById)
  .post('/', lugarSiniestroController.postLugarSiniestro)
  .put('/:id', lugarSiniestroController.updateLugarSiniestro)
  .delete('/:id', lugarSiniestroController.deleteLugarSiniestro);

module.exports = router;
