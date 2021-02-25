const fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

module.exports={

    login: (req, res) =>{
        res.render('login', {
            title: "Iniciar sesion"
        });
    },
    register: (req, res) =>{
        res.render('register',{
            title: "Registrarse"
        });
    
},
login: (req, res) =>{
    let {email, password} = req.body

    let usuario = usuarios.find(user => {
        return user.email === email
    })
    
    if (req.body == undefined || password == "" || email == "") {
        res.render("login")
    } else {
        if (usuario == undefined) {
            res.render("login")
        } else if (password === usuario.password) {
            res.redirect("/")
        } else {
            res.render("login")
        }
    }
}
}




    
                