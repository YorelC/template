const router = require('express').Router();

// Controllers
const {verifyJWT} = require('../controllers/tokenControllers')
const testControllers = require('../controllers/testControllers');

// Signup route
router.post('/co', testControllers.co);

//Check token route
router.get('/check_token', verifyJWT, testControllers.token_ok);

module.exports = router;
