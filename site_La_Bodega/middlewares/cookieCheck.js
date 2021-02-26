module.exports = (req,res,next)=>{
    if(req.cookies.userComision5){
        req.session.user = req.cookies.userComision5;
    }
    next()
}