const express = require('express');
const router  = express.Router();

router.get('/serviceAvailable', (req, res) => require('./functions/serviceAvailable')(req, res));

module.exports = router;