const express = require('express');
const router = express.Router();

const VERSION_1_0 = require('./1.0/api');

router.use('/1.0', VERSION_1_0);

module.exports = router;