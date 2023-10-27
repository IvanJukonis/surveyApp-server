const express = require('express');

const involved = require('./involved');
const location = require('./location');
const vehicle = require('./vehicule');

const router = express.Router();

router.use('/involved', involved);
router.use('/location', location);
router.use('/vehicle', vehicle);

module.exports = router;
