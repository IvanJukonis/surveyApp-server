const express = require('express');

const router = express.Router();

const lugarSiniestroController = require('../controllers/lugarSiniestro');

router
  .post('/', lugarSiniestroController.createLugarSiniestro)
  .get('/', lugarSiniestroController.getLugarSiniestro);

module.exports = router;
