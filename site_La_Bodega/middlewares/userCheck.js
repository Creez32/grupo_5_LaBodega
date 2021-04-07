module.exports = (req,res,next) => {
    if(req.session.userL){
        res.locals.user = req.session.userL
        next()
    }else{
        res.redirect('/session/login')
    }
}