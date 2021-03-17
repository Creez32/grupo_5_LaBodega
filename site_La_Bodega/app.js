const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

let cookieChek = require('./middlewares/cookieCheck.js')
let localCheck = require('./middlewares/localCheck')

const indexRouter = require('./routes/index');
const sessionRouter = require('./routes/session');
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/adminRouter');
const dbConnectionTest = require('./utils/dbConnectionTest.js');



const app = express();
const port = 5000

dbConnectionTest()

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret : "este es un mensaje secreto"
  }))
app.use(cookieChek)
app.use(localCheck)


app.use('/',indexRouter);
app.use('/session',sessionRouter);
app.use('/products',productsRouter);
app.use('/admin',adminRouter);




app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))