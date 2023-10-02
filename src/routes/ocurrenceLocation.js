const express = require('express');

const router = express.Router();

const ocurrenceLocationController = require('../controllers/ocurrenceLocation');

router
  .post('/', ocurrenceLocationController.createOcurrenceLocation)
  .get('/', ocurrenceLocationController.getAllOcurrenceLocation);

module.exports = router;
