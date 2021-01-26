const express = require('express');
const app = express();
const port = 5000
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var productsRouter = require('./routes/products')



app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public'));



app.use('/',indexRouter);
app.use('/products',productsRouter);
app.use('/login',loginRouter);



app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

