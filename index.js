/*=============================================
UBICAMOS LOS REQUERIMIENTOS
=============================================*/

require('./config');

const express= require('express');
const mongoose = require('mongoose');


/*=============================================
CREAMOS UNA VARIABLE PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
=============================================*/

const app = express();


/*=============================================
IMPORTAR RUTAS
=============================================*/


app.use( require('./rutas/productos.ruta'));


/*=============================================
Conexion bd
=============================================*/

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('Conectado a la base de datos')); 


/*=============================================
Salida puerto
=============================================*/

app.listen(process.env.PORT, ()=>{

	console.log(`Habilitado el puerto ${process.env.PORT}`)
})