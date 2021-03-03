var express = require('express');
var router = express.Router();
const path = require('path');

const {login,processLogin,register,processRegister,profile,logout} = require('../controller/sessionController');

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const userCheck = require('../middlewares/userCheck')
const sessionCheck = require('../middlewares/sessionCheck')

const upload = require(path.join('..','utils','uploadImages'))

/* GET home page. */
router.get('/login',sessionCheck, login);
router.post('/login',loginValidator,processLogin)

router.get('/register',sessionCheck, register);
router.post('/register',upload.any(),registerValidator, processRegister);

router.get('/profile',userCheck, profile)
router.get('/profile/logout', logout)

module.exports = router;

