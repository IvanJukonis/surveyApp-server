const express = require('express');

const involved = require('./involved');
const ocurrenceLocation = require('./ocurrenceLocation');
const vehicle = require('./vehicule');

const router = express.Router();

router.use('/involved', involved);
router.use('/ocurrenceLocation', ocurrenceLocation);
router.use('/vehicle', vehicle);

module.exports = router;
