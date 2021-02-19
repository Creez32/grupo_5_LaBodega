var express = require('express');
var router = express.Router();

const productsController = require('../controller/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/add',productsController.charge);
router.get('/cart',productsController.cart)

module.exports = router;