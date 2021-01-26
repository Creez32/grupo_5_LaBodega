var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');

/* GET home page. */
router.get('/', loginController.login);

module.exports = router;