const express = require('express');

const router = express.Router();

const involvedController = require('../controllers/involved');

router
  .post('/', involvedController.createInvolved)
  .get('/', involvedController.getAllInvolved);

module.exports = router;
