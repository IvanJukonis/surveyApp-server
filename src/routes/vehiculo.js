const express = require('express');

const router = express.Router();

const vehiculoController = require('../controllers/vehiculo');

router
  .get('/', vehiculoController.getVehiculo)
  .get('/:id', vehiculoController.getVehiculoById)
  .post('/', vehiculoController.postVehiculo)
  .put('/:id', vehiculoController.updateVehiculo)
  .delete('/:id', vehiculoController.deleteVehiculo);

module.exports = router;
