const express = require('express');
const router  = express.Router();
const auth = require('./check-auth');

router.get('/serviceAvailable', (req, res) => require('./functions/serviceAvailable')(req, res));
router.post('/signup', (req, res) => require('./functions/signup')(req, res));
router.post('/login', (req, res) => require('./functions/login')(req, res));
router.post('/budgetItem', (req, res) => require('./functions/postBudgetItem')(req, res));
router.get('/userBudgetItems', auth, (req, res) => require('./functions/getUserBudgetItems')(req, res));
router.put('/budgetItem', (req, res) => require('./functions/updateBudgetItem')(req, res));

module.exports = router;