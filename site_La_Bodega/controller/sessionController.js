/* const fs = require('fs'); */
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');
const db = require('../database/models');


/* const { getUsers, setUsers } = require('../data/users');

const users = getUsers(); */

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
        if (!errores.isEmpty()) {
            return res.render('users/register', {
                errores: errores.errors
            })
        } else {
            const { name, lastName, email, pass, /* gender, */ address, dateOfBirth } = req.body;

            /*  let lastID = 0;
             users.forEach(user => {
                 if (user.id > lastID) {
                     lastID = user.id
                 }
             }); */

/*             const passHash = bcrypt.hashSync(pass, 12)
 */            db.Users.create({
                name,
                apellido: lastName,
                direccion: address,
                email,
                password: bcrypt.hashSync(pass, 12),
                avatar,
                fecha: dateOfBirth
            })
                .then(() => {
                res.redirect('/users/login')})
                

                .catch(error =>{
                     res.send(error)})
        }
        /* let newUser = {
            id: +lastID + 1,
            name,
            lastName,
            email,
            address,
            gender,
            dateOfBirth,
            pass: passHash,
            img: req.files[0].filename,
            Admin : false
        }
        users.push(newUser)
        setUsers(users);

        return res.redirect('login')
    } */
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


            /*     let result = users.find(user => user.email === email);

                if (result) {
                    if (bcrypt.compareSync(pass.trim(), result.pass)) {

                        req.session.user = {
                            id: result.id,
                            name: result.name,
                            lastName: result.lastName,
                            email: result.email,
                            img: result.img,
                            admin: result.Admin
                        }

                        if (recordar) {
                            res.cookie('LaBodega', req.session.user, {
                                maxAge: 1000 * 60 * 60 * 24 * 7
                            })
                        }

                        return res.redirect('profile')
                    }
                }
                res.render('users/login', {
                    errores: {
                        pass:
                        {
                            msg: 'Credenciales Invalidas'
                        }
                    },
                    data: req.body
                })
            } */
            db.Users.findOne({
                where: {
                    email
                }
            })
                .then((user) => {
                    if (user) {
                        if (bcrypt.compareSync(pass.trim(), user.pass)) {
                            req.session.user = {
                                id: user.id,
                                name: user.name,
                                lastName: user.apellido,
                                email: user.email,
                                img: user.avatar,
                            }
                            if (typeof recordar != 'undefined') {
                                res.cookie('LaBodega', req.session.user, {
                                    maxAge: 1000 * 60 * 60 * 24 * 100000
                                })
                            }
                            return res.redirect('profile')
                        }
                    }
                    res.render('users/login', {
                        errores:
                        {
                            pass: {
                                msg: 'Credenciales inválidas'
                            }
                        },
                        data: req.body

                    })
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



