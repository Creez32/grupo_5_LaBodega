var express = require('express');
var router = express.Router();
const {home,contact,bodega} = require('../controller/indexController')

/* GET home page. */
router.get('/', home);
router.get('/contact',contact);
router.get('/bodega', bodega)

module.exports = router;


