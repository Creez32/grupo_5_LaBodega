var express = require('express');
var router = express.Router();
const productsController = require('../controller/productsController');

router.get('/', productsController.listar);
router.get('/detalle', productsController.detalle);

module.exports=router;