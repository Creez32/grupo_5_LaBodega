module.exports = (req,res,next)=>{
    if(req.session.userL){
        if (req.session.userL.admin == 1){
            return next()
        }
    }
    res.redirect('/products')
}