module.exports={
    home: (req, res) =>{
        res.render('home');
    },
    contact: (req,res) =>{
        res.render ('contact')
    },
    bodega:(req,res) => {
        res.render ('bodega')
    }
}