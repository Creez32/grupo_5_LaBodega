const {getWines} = require('../data/products');
const db = require('../database/models')

const products = getWines();
const {Op, where} = require('sequelize')

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
        const {id} = req.params
        let product = db.Product.findOne(
            {
                where: {
                    id: +id
                },
                include:[
                    {
                        association : 'category'
                    },
                    {
                        association : 'color'
                    }
                ]
            }
        )
        let aleatorio = db.Product.findAll({
            limit : 4
        })
        
        Promise.all([product,aleatorio])
        .then(([product,aleatorio]) =>{
            res.render('detail',{
                product:product,
                aleatorio:aleatorio
            })
        })
    },
    cart:(req,res)=>{
        res.render('cart')        
    },
    search:(req,res)=>{

        let buscar = db.Product.findAll(
            {
                where: {
                    [Op.or]: [
                        { 'name': { [Op.substring]: req.query.buscar} },
                        { 'detail': { [Op.substring]: req.query.buscar } },
                        { 'category': {[Op.substring]: req.query.buscar} },
                    ]
                },
                include:[
                    {
                        association : 'category'
                    },
                    {
                        association : 'color'
                    }
                ]
            }
        )
        res.send(buscar)
        res.render('search',{
            title:"Resultado de la búsqueda",
            buscar
        })

    }
    
    
}