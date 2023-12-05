const express = require('express');

const router = express.Router();

const ruedaController = require('../controllers/rueda');

router
  .get('/', ruedaController.getRueda)
  .get('/:id', ruedaController.getRuedaById)
  .post('/', ruedaController.postRueda)
  .put('/:id', ruedaController.updateRueda)
  .delete('/:id', ruedaController.deleteRueda);

module.exports = router;
