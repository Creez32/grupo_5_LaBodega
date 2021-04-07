module.exports = (req,res,next)=>{
    if(req.cookies.LaBodega){
        req.session.userL = req.cookies.LaBodega;
    }
    next()
}