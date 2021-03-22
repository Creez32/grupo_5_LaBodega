/* const fs = require('fs');
const path = require('path');

const {getWines, setWines} = require('../data/products');

const wines = getWines(); */
const db = require('../database/models')

module.exports = {
    listWine: (req, res) => {
        res.render('admin/ProductList', {
            wines
        })
    },
    createWine: (req, res) => {
        res.render('admin/productCreate')

    },
    storeWine: (req, res, next) => {

        const { name, detail, price_box, price_unit,/*  type, */ variety, year, time, color, origin } = req.body;

        
        let img = req.files[0].filename;

        db.Products.create({
            name,
            price: price_unit,
            priceBox: price_box,
            detail,
            year,
            time,
            color,
            origin,
            imagen: img,
            category_id: variety,

        })
            .then((newWine) => {
                console.log(newWine);
                res.redirect('/admin/products');
            })
            .catch((error) => res.send(error));

    
    },
    editWine: (req, res) => {

        db.Products.findByPk(req.params.id)
            .then((product) => {
                res.render("admin/productEdit", {
                    product
                })
            })
            .catch((error) => {
                res.send(error)
            })
        
    },
    updateWine: (req, res, next) => {
        const { name, detail, price_box, price_unit, /* type, */ variety, year, time, color, origin } = req.body;

        let img = req.files[0].filename;


        db.Products.update({
            name,
            price: price_unit,
            priceBox: price_box,
            detail,
            year,
            time,
            color,
            origin,
            imagen: img,
            category_id: variety,


        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {

                res.redirect("/admin/products")

            })
            .catch((error) => {
                res.send(error)
            })
    },
    deleteWine: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.redirect("/admin/products")
            })
            .catch((error) => {
                res.send(error)
            })
    }

}
