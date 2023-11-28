const express = require('express');

const router = express.Router();

const ruedaController = require('../controllers/rueda');

router
  .post('/', ruedaController.createRueda)
  .get('/', ruedaController.getRueda);

module.exports = router;
