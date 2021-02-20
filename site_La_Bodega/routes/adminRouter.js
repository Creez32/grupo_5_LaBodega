const express = require('express');
const adminController = require('../controller/adminController');
const router = express.Router();
const multer = require("multer");
const path = require('path');



const {createWine,deleteWine,editWine,listWine,storeWine,updateWine} =adminController
//cambiar luego con el inicio de sesion

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/botellas')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })


router.get('/products' ,listWine);
router.get('/products/create' ,createWine)
router.get('/products/:id')
router.post('/products' ,upload.any(),storeWine)
router.get('/products/:id/edit',editWine)
router.put('/products/:id', upload.any(),updateWine)
router.delete('/products/:id',deleteWine)


module.exports=router