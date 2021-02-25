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
processLogin : (req, res) => {
    let errores = validationResult(req);

    const {email, pass, recordar} = req.body;
    
    if(!errores.isEmpty()){
        res.render('login',{
            errores : errores.errors
        })
    }else{
        let result = users_db.find(user => user.email === email);

        if(result){
            if(bcrypt.compareSync(pass.trim(), result.pass)){

                req.session.user = {
                    id : result.id,
                    username : result.username,
                }

                if(recordar){
                    res.cookie('userLaBodega',req.session.user,{
                        maxAge : 1000 * 60
                    })
                }

                res.redirect('/profile')
            }
        }
        res.render('login', {
            errores : [
                {
                    msg : "credenciales inválidas"
                }
            ]
        })
    }
};





    
                