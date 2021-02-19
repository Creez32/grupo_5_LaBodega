const {getWines} = require('../data/products');

const products = getWines();


module.exports={
    list: (req,res)=>{
        const tintos = products.filter((products)=>{
            return products.type === 'Tinto'
        });
        const blancos = products.filter((products)=>{
            return products.type === 'Blanco'
        });
        const espumantes = products.filter((products)=>{
            return products.type === 'Espumante'
        });
        res.render('products',{
            tintos,blancos,espumantes
        })
    },
    detail: (req, res)=>{
        let product = products.find(product => {
			return product.id == req.params.id
        })
        let cantidad = products.length
        
        let random = () => Math.floor(Math.random() * cantidad)

        const recomendados = products.filter((products)=>{
            return products.type === 'Espumante'
        });

        res.render('detail',{
            product,recomendados
        })
    },
    charge:(req,res)=>{
        res.render('productscharges')
    },
    cart:(req,res)=>{
        res.render('cart')        
    }

    
}