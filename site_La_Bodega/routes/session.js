var express = require('express');
var router = express.Router();
const path = require('path');

const {login,processLogin,register,processRegister,profile,logout} = require('../controller/sessionController');

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const userCheck = require('../middlewares/userCheck')

const upload = require(path.join('..','utils','uploadImages'))

/* GET home page. */
router.get('/login', login);
router.post('/login',loginValidator,processLogin)

router.get('/register', register);
router.post('/register',registerValidator,upload.any(), processRegister);

router.get('/profile',userCheck, profile)
router.get('/profile', logout)

module.exports = router;

