const express = require('express');

const router = express.Router();

const vehicleController = require('../controllers/vehicle');

router
  .post('/', vehicleController.createVehicle)
  .get('/', vehicleController.getAllVehicle);

module.exports = router;
