const {check} = require('express-validator');

module.exports = [
    check('email')
    .isEmail().withMessage('El email debe ser válido'),

    check('password')
    .notEmpty().withMessage('La constraseña es requerida')
]