const fs = require('fs');
const bcrypt = require('bcrypt');

const { getUsers, setUsers } = require('../data/users');

const users = getUsers();

const { validationResult } = require('express-validator')
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
        const { name, lastName, email, password,gender,address,dateOfBirth,img} = req.body;

        let lastID = 0;
        users.forEach(user => {
            if (user.id > lastID) {
                lastID = user.id
            }
        });

        const passHash = bcrypt.hashSync('password', 12)

        let newUser = {
            id: +lastID + 1,
            name,
            lastName,
            email,
            address,
            gender,
            dateOfBirth,
            password: passHash,
            img: req.files[0].filename
        }
        users.push(newUser)
        setUsers(users);

        res.redirect('/session/login')

    },
    processLogin: (req, res) => {
        let errores = validationResult(req);
        const { email, password, recordar } = req.body;
               
        if (!errores.isEmpty()) {
            res.render('users/login', {
                errores: errores.errors
            })
        } else {
            let result = users.find(user => user.email === email);

            if (result) {
                if (bcrypt.compareSync(password.trim(), result.password)) {

                    req.session.user = {
                        id: result.id,
                        name: result.name,
                        lastName: result.lastName,
                        img: result.img,
                        address: result.address,
                        dateOfBirth: result.dateOfBirth,
                    }

                    if (recordar) {
                        res.cookie('LaBodega', req.session.user, {
                            maxAge: 1000 * 60
                        })
                    }

                    res.redirect('users/profile')
                }
            }
            res.render('users/login', {
                errores: [
                    {
                        msg: "credenciales inválidas"
                    }
                ]
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



