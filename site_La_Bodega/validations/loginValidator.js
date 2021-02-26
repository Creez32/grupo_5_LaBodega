const {check} = require('express-validator');

module.exports = [
    check('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email debe ser valido'),

    check('pass')
    .notEmpty().withMessage('La contraseña es requerida')

]