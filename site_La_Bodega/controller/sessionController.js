const db = require('../database/models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');



module.exports = {


    login: (req, res) => {
        res.render('users/login', {
            title: "Iniciar sesion"
        });
    },
    register: (req, res) => {
        res.render('users/register', {
            title: "Registrarse"
        });

    },
    processRegister: (req, res) => {
        let errores = validationResult(req);
        if (errores.isEmpty()) {
            const { name, lastName, email, pass, /* gender, */ address, dateOfBirth } = req.body;
            let img = req.files[0].filename;

            db.User.create({
                name,
                apellido: lastName,
                direccion: address,
                email,
                password: bcrypt.hashSync(pass, 12),
                avatar: img,
                fecha: dateOfBirth,
                admin: 0
            })
                .then(() => {
                    res.redirect('/session/login')
                })


                .catch(error => {
                    res.send(error)
                })


        } else {
            return res.render('users/register', {
                errores: errores.mapped(),
                old: req.body
            })
        }
    },

    processLogin: (req, res) => {
        let errores = validationResult(req);
        const { email, pass, recordar } = req.body;

        if (!errores.isEmpty()) {
            return res.render('users/login', {
                errores: errores.mapped(),
                data: req.body
            })
        } else {

            db.User.findOne({
                where: {
                    email
                }
            })
            .then((user) => {
                if (user && bcrypt.compareSync(pass.trim(), user.password)) {
                    req.session.userL = {
                        id: user.id,
                        name: user.name,
                        lastName: user.apellido,
                        email: user.email,
                        img: user.avatar,
                    }
                    if (recordar) {
                        res.cookie('LaBodega', req.session.userL, {
                            maxAge: 1000 * 60 * 60 * 24 * 100000
                        })
                    }
                    return res.redirect('/session/profile')

                } else {
                    return res.render('users/login', {
                        errores: {
                            pass: {
                                msg: 'Credenciales inválidas'
                            }
                        },
                        data: req.body

                    })
                }
            })
            .catch((error) => {
                res.send(error)
            })
        }
    },
    profile: (req, res) => {
        res.render('users/profile')
    },
    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.LaBodega) {
            res.cookie('LaBodega', '', { maxAge: -1 })
        }
        res.redirect('/')
    }
}



