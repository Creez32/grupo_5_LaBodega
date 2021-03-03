module.exports = (req,res,next) => {
    if(!req.session.usuario){
        next()
    }else{
        res.redirect('perfil')
    }
}