const express = require('express');

const router = express.Router();

const ocurrenceLocationController = require('../controllers/ocurrenceLocation');

router
  .post('/', ocurrenceLocationController.createOcurrenceLocation)
  .get('/', ocurrenceLocationController.getAllOcurrenceLocations);

module.exports = router;
