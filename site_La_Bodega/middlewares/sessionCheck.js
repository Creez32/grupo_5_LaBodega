module.exports = (req,res,next) => {
    if(!req.session.userL){
        next()
    }else{
        res.redirect('/session/profile')
    }
}