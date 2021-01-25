const express = require('express');
const app = express();
const port = 5000


app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products')




app.use('/',indexRouter);



app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

