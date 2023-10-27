const express = require('express');

const router = express.Router();

const investigatorController = require('../controllers/investigator');

router
  .post('/', investigatorController.createInvestigator)
  .get('/', investigatorController.getInvestigators);

module.exports = router;
