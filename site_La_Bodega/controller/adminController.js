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

        const { name, detail, priceBox, price, variety, year, time, color, origin, categoria } = req.body;


        let img = req.files[0].filename;

        db.Product.create({
            name,
            price,
            priceBox,
            detail,
            year,
            time,
            variety,
            colorId: color,
            origin,
            imagen: img,
            categoryId: categoria,

        })
            .then(() => {
                res.redirect('/admin/products');
            })
            .catch((error) => res.send(error));

        /* errors = errors.mapped();
        if (req.fileValidationError) {
            errors = {
                ...errors,
                image: {
                    msg: req.fileValidationError
                }
            }
            console.log(errors)
        } */


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
        
        const { name, detail, priceBox, price, variety, year, time,category, color, origin } = req.body;

        let img = req.files[0] ? req.files[0].filename : undefined;

        db.Product.update({
            name,
            price,
            priceBox,
            detail,
            year,
            time,
            variety,
            colorId: color,
            origin,
            imagen: img,
            categoryId: category,

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
