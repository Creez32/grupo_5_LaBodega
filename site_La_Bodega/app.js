const express = require('express');
const methodOverride = require('method-override');

const app = express();
const port = 5000

const indexRouter = require('./routes/index');
const sessionRouter = require('./routes/session');
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/adminRouter');


app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));



app.use('/',indexRouter);
app.use('/session',sessionRouter);
app.use('/products',productsRouter);
app.use('/admin',adminRouter)




app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

