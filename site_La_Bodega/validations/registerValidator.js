const {check, body} = require('express-validator')
const db = require('../database/models');


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

    body('email').custom(value => {

        return db.User.findOne({
            where : {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })

    }),

    body('pass2').custom((value,{req}) =>{
        if (value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no conciden!')
]
