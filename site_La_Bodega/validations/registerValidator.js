const {check, body} = require('express-validator')
const {getUsers} = require('../data/users');
const users = getUsers()

module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('pass')
    .isLength({
        min:8, max:12
    })
    .withMessage('Minimo de 8 caracteres y un maximo de 12'),

    body('username').custom(value=> {
        let result = users.find(user => user.username === value.trim());

        if(result){
            return false
        }else{
            return true
        }
    })
    .withMessage('El username ya esta en uso')
]