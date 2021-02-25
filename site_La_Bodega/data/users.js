const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf-8'))

/* middlewares */
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');



router.get('/login',login);
router.post('/login', loginValidator, processLogin);