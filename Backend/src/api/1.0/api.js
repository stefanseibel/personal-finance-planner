const express = require('express');
const router  = express.Router();
const auth = require('./check-auth');

router.get('/serviceAvailable', (req, res) => require('./functions/serviceAvailable')(req, res));
router.post('/signup', (req, res) => require('./functions/signup')(req, res));
router.post('/login', (req, res) => require('./functions/login')(req, res));
router.post('/budgetItem', auth, (req, res) => require('./functions/postBudgetItem')(req, res));
router.get('/budgetItem', auth, (req, res) => require('./functions/getUserBudgetItems')(req, res));
router.put('/budgetItem', auth, (req, res) => require('./functions/updateBudgetItem')(req, res));
router.get('/userAssets', auth, (req, res) => require('./functions/getUserAssets')(req, res));
router.post('/userAssets', auth, (req, res) => require('./functions/postUserAssets')(req, res));
router.put('/userAssets', auth, (req, res) => require('./functions/getUserAssets')(req, res));

module.exports = router;