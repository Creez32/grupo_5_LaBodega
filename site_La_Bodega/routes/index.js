var express = require('express');
var router = express.Router();
const {home,contact} = require('../controller/indexController')

/* GET home page. */
router.get('/', home);
router.get('/contact',contact)

module.exports = router;


