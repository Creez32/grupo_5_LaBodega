const express = require('express');
const app = express();
const port = 5000
const indexRouter = require('./routes/indexRouter.js')
const detalleRouter = require('./routes/detalleRouter')


app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + '/public'));


app.use('/',indexRouter);
app.use('/detalle',detalleRouter);



app.listen(port, ()=> console.log("El servidor esta corriendo en el puerto " + port))

