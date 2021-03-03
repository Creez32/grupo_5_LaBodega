const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();
const path = require('path');


const {createWine,deleteWine,editWine,listWine,storeWine,updateWine} = adminController
//cambiar luego con el inicio de sesion

const upload = require(path.join('..','utils','multerWines'))
const userCheck = require('../middlewares/userCheck')

router.get('/products' ,userCheck,listWine);
router.get('/products/create' ,userCheck,createWine)
router.get('/products/:id')
router.post('/products' ,upload.any(),storeWine)
router.get('/products/:id/edit',userCheck,editWine)
router.put('/products/:id', upload.any(),userCheck,updateWine)
router.delete('/products/:id',userCheck,deleteWine)


module.exports = router