const products = require('../data/products')


module.exports={
    list: (req,res)=>{
        res.render('products')
    },
    detail: (req, res)=>{
        res.render('detail')
    },
    charge:(req,res)=>{

    },
    cart:(req,res)=>{
        res.render('cart')        
    }
}