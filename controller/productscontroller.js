const fs = require('fs')
const path = require('path')
const dbProducts = require(path.join(__dirname, '..','data', 'dbProducts'))

let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8')
productos = JSON.parse(productos)

module.exports={
    listar: (req,res)=>{
        res.render('products', 
        {title : 'Nuestra Carta',
         css : 'carta.css',
         listaDeProductos : dbProducts})
    },
    detalle: (req, res)=>{
        
    }
}