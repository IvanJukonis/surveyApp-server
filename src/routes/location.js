const express = require('express');

const router = express.Router();

const locationController = require('../controllers/location');

router
  .post('/', locationController.createLocation)
  .get('/', locationController.getLocations);

module.exports = router;
