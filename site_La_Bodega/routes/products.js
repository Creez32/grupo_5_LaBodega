var express = require('express');
var router = express.Router();

const {cart,detail,list,search} = require('../controller/productsController');

router.get('/',list);
router.get('/detail/:id', detail);
router.get('/cart', cart)
router.get('/search',search)

module.exports = router;