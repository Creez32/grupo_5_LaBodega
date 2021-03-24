const {getWines} = require('../data/products');
const db = require('../database/models')

const products = getWines();
/* const {Op, where} = require('sequelize')
 */
module.exports={
    list: (req,res)=>{
        let tintos = db.Category.findAll(
            {
                where: {
                    id: 1
                },
                include:[
                    {
                        association : 'vinos'
                    }
                ]
            }
        )
        let blancos = db.Category.findAll(
            {
                where: {
                    id: 2
                },
                include:[
                    {
                        association : 'vinos'
                    }
                ]
            }
        )
        let espumantes = db.Category.findAll(
            {
                where: {
                    id: 3
                },
                include:[
                    {
                        association : 'vinos'
                    }
                ]
            }
        )
        Promise.all([tintos,blancos,espumantes])
        .then(([tintos,blancos,espumantes]) => {
            
            res.render('products',{
                tintos:tintos[0].vinos,
                blancos:blancos[0].vinos,
                espumantes:espumantes[0].vinos
            })
        })  
        .catch(error => res.send(error))
        
    },
    detail: (req, res)=>{
        /* let product = products.find(product => {
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
        }) */
        
        // BASES DE DATOS
        const {id} = req.params
        let product = db.Products.findOne({
            where : id = +id
        })
        let aleatorio = db.Products.findAll({
            limit : 4
        })
        Promise.all([aleatorio])
        .then(([aleatorio]) =>{
            res.render('detail',{
                product,aleatorio
            })
        })
    },
    cart:(req,res)=>{
        res.render('cart')        
    },
    search:(req,res)=>{
        /* const search = req.query.search;

        const resultado = products.filter((products)=>{
            return products.variety.includes(search)
        })
        
        res.render('search',{
            title:"Resultado de la búsqueda",
            resultado
        }) */
        let buscar = db.Products.findAll({
            where: {
                [Op.or]: [
                    { 'name': { [Op.substring]: req.query.buscar} },
                    { 'detail': { [Op.substring]: req.query.buscar } },
                ]
            },
        })

        res.render('search',{
            title:"Resultado de la búsqueda",
            buscar
        })

    }
    
    
}