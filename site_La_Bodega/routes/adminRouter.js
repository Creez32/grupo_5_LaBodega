const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();
const path = require('path');


const {createWine,deleteWine,editWine,listWine,storeWine,updateWine} =adminController
//cambiar luego con el inicio de sesion

const upload = require(path.join('..','utils','multerWines'))


router.get('/products' ,listWine);
router.get('/products/create' ,createWine)
router.get('/products/:id')
router.post('/products' ,upload.any(),storeWine)
router.get('/products/:id/edit',editWine)
router.put('/products/:id', upload.any(),updateWine)
router.delete('/products/:id',deleteWine)


module.exports=router