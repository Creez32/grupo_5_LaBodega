module.exports = (req,res,next)=>{
    if(req.cookies.LaBodega){
        req.session.user = req.cookies.LaBodega;
    }
    next()
}