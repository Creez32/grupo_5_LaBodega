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

        let aleatorio = [];
        for (let i = 0; i < 4; i++) {
            let ran = Math.floor(Math.random()*(products.length))
            let seleccion = products[ran];
             aleatorio.push(seleccion);
            }

        res.render('detail',{
            product,aleatorio
        })
    },
    cart:(req,res)=>{
        res.render('cart')        
    },
    search:(req,res)=>{
        const search = req.query.search;

        const resultado = products.filter((products)=>{
            return products.variety.includes(search)
        })
        
        res.render('search',{
            title:"Resultado de la búsqueda",
            resultado
        })
    }

    
}