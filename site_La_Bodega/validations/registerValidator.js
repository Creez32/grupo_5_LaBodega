const fs = require('fs');
const {check, body} = require('express-validator')
const users_db = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es requerido'),

    check('lastName')
    .notEmpty().withMessage('El apellido es requerido'),

    check('pass')
    .isLength({
        min:8, max:12
    })
    .withMessage('Minimo de 8 caracteres y un maximo de 12'),

    body('email').custom(value=>{
        let result = users_db.find(user => user.email === value);
        if (result){
            return false
        }else{
            return true
        }
    }).withMessage('El email ya ha sido utilizado'),

    body('pass2').custom((value,{req}) =>{
        if (value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no conciden!')
]
