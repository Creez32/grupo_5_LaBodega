const db = require('../database/models')

module.exports = {
    listWine: (req, res) => {

        db.Product.findAll({
            order: [
                ['name', 'ASC']
            ],
        })
            .then((products) => {
                res.render('admin/ProductList', { products })
            })
            .catch((error) => res.send(error))
    },
    createWine: (req, res) => {
        res.render('admin/productCreate')

    },
    storeWine: (req, res, next) => {

        const { name, detail, priceBox, price ,variety, year, time, color, origin } = req.body;

        
        let img = req.files[0].filename;

        db.Product.create({
            name,
            price,
            priceBox,
            detail,
            year,
            time,
            colorId: color,
            origin,
            imagen: img,
            categoryId: variety,

        })
            .then(() => {
                res.redirect('/admin/products');
            })
            .catch((error) => res.send(error));

    
    },
    editWine: (req, res) => {

        db.Product.findByPk(req.params.id)
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
        const { name, detail, priceBox, price,variety, year, time, color, origin } = req.body;

        let img = req.files[0].filename;


        db.Product.update({
            name,
            price,
            priceBox,
            detail,
            year,
            time,
            colorId: color,
            origin,
            imagen: img,
            categoryId: variety,


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
        db.Product.destroy({
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
