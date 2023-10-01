const express = require('express');

const involved = require('./involved');

const router = express.Router();

router.use('/involved', involved);

module.exports = router;
