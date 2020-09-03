const express = require('express');
const router  = express.Router();

router.get('/serviceAvailable', (req, res) => require('./functions/serviceAvailable')(req, res));
router.post('/signup', (req, res) => require('./functions/postSignup')(req, res));

module.exports = router;