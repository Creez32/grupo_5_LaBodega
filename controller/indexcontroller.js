const express = require('express')

module.exports={
    home: (req, res) =>{
        res.render('index',
        {title : 'La Bodega',
         css: 'style.css'});
    }
}