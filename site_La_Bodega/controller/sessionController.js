const fs = require('fs');
const bcrypt = require('bcrypt');

let usuarios = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

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
    processRegister:(req,res) =>{

    },  
    login: (req, res) => {
        res.render('users/login')
    },
    processLogin: (req, res) => {
        let errores = validationResult(req);

        const { email, password, recordar } = req.body;

        if (!errores.isEmpty()) {
            res.render('users/login', {
                errores: errores.errors
            })
        } else {
            let result = users_db.find(user => user.email === email);

            if (result) {
                if (bcrypt.compareSync(password.trim(), result.password)) {

                    req.session.user = {
                        id: result.id,
                        name: result.name,
                        lastName: result.lastName,
                        img : result.img,
                        address: result.address

                    }

                    if (recordar) {
                        res.cookie('userLaBodega', req.session.user, {
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
    profile: (req,res)=>{
        res.render('users/profile')
    },
    logout: (req,res) =>{
        req.session.destroy();
        if(req.cookies.userComision5){
            res.cookie('userComision5','', {maxAge: -1})
        }
        res.redirect('/')
    }
}



