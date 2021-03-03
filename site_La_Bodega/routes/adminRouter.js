const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();
const path = require('path');


const {createWine,deleteWine,editWine,listWine,storeWine,updateWine} = adminController
//cambiar luego con el inicio de sesion

const upload = require(path.join('..','utils','multerWines'))
const userCheck = require('../middlewares/userCheck')
const adminCheck = require('../middlewares/adminCheck')

router.get('/products',userCheck, adminCheck,listWine);
router.get('/products/create',userCheck, adminCheck ,createWine)
router.get('/products/:id')
router.put('/products/:id', upload.any(),updateWine)

router.delete('/products/:id',userCheck,adminCheck ,deleteWine)

router.post('/products' ,upload.any(),storeWine)
router.get('/products/:id/edit',userCheck,adminCheck,editWine)



module.exports = router