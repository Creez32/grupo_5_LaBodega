var express = require('express');
var router = express.Router();
const sessionController = require('../controller/sessionController');

/* GET home page. */
router.get('/login', sessionController.login);

router.get('/register', sessionController.register);

module.exports = router;

