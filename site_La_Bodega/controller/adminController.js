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

        let lastID = 1;
        wines.forEach(wine => {
            if (wine.id > lastID) {
                lastID = wine.id
            }
        });

        const {name, detail, price_box, price_unit, type, variety, year, time,color,origin,img} = req.body;

        let wine = {
            id: lastID + 1,
            name,detail, price_box, price_unit, type, variety, year, time,color,origin,img: req.files[0].filename

            
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

        const {name, detail, price_box, price_unit, type, variety, year, time,color,origin} = req.body;
        let img = req.files[0].filename;


        wines.forEach(wine => {
            if(wine.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','botellas',wine.img))){
                    fs.unlinkSync(path.join('public','images','botellas',wine.img));
                }

                wine.id = +req.params.id;
                wine.name=name, 
                wine.detail=detail, 
                wine.price_box=price_box,
                wine.price_unit=price_unit, 
                wine.type=type, 
                wine.variety=variety, 
                wine.year=year, 
                wine.time=time,
                wine.color=color,
                wine.origin=origin,
                wine.img=img
            }
        });

        setWines(wines);
        res.redirect('/admin/products');
    },
    deleteWine : (req,res) => {

        wines.forEach(wine => {
            if(wine.id === +req.params.id){

                if(fs.existsSync(path.join('public','images','botellas',wine.img))){
                    fs.unlinkSync(path.join('public','images','botellas',wine.img));
                }
                let eliminar = wines.indexOf(wine);
                wines.splice(eliminar,1);
            }
        });

        setWines(wines);

        res.redirect('/admin/products');
    }
}
