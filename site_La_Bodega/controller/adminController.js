const fs = require('fs');
const path = require('path');

const {getWines, setWines} = require('../data/products');

const wines = getWines();

module.exports = {
    listWine : (req,res)=>{
        res.render('admin/ProductList',{
            wines
        })
    },
    createWine : (req,res)=> {
        res.render('admin/productCreate')
    },
    storeWine : (req,res,next) => {

        let lastID = 0;
        wines.forEach(wine => {
            if (wine.id > lastID) {
                lastID = wine.id
            }
        });

        const {name, description, price, price1,time, origin, varietal, sector, } = req.body;
        let image = req.files[0].filename;

        let wine = {
            id: lastID + 1,
            name,
            description,
            price,
            price1,
            image,
            time,
            origin,
            varietal,
            sector,
            
        }

        wines.push(wine);
        setWines(wines);
        res.redirect('/admin/products');
    },
    editWine : (req,res) => {

        const wine = wines.find(wine=>wine.id === +req.params.id);


        res.render('admin/productEdit',{
            wine
        })
    },
    updateWine : (req,res,next) => {

        const {name, description, price, price1,time, origin, varietal, sector} = req.body;
        let image = req.files[0].filename;


        wines.forEach(wine => {
            if(wine.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','wines',wine.image))){
                    fs.unlinkSync(path.join('public','images','wines',wine.image));
                }

                wine.id = +req.params.id;
                wine.name = name;
                wine.description = description;
                wine.price = price;
                wine.price1 = price1;
                wine.image= image   ;
                wine.time =time;
                wine.origin=origin;
                wine.varietal=varietal;
                wine.sector=sector
            }
        });

        setWines(wines);

        res.redirect('/admin/products');
    },
    deleteWine : (req,res) => {

        wines.forEach(wine => {
            if(wine.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','wines',wine.image))){
                    fs.unlinkSync(path.join('public','images','wines',wine.image));
                }
                let eliminar = wines.indexOf(wine);
                wines.splice(eliminar,1);
            }
        });

        setWines(wines);

        res.redirect('/admin/products');
    }
}
