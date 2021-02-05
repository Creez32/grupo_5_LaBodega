const express = require('express');
const app = express();
const port = 5000
var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var productsRouter = require('./routes/products')



app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public'));



app.use('/',indexRouter);
app.use('/session',sessionRouter);
app.use('/products',productsRouter);




app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

