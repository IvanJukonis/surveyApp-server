const express = require('express');

const router = express.Router();

const vehiculoController = require('../controllers/vehiculo');

router
  .post('/', vehiculoController.createVehiculo)
  .get('/', vehiculoController.getVehiculo);

module.exports = router;
