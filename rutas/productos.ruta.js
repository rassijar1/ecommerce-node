/*=============================================
IMPORTAR EXPRESS
=============================================*/

const express= require('express');
const app = express();

/*=============================================
IMPORTAR CONTROLADOR
=============================================*/

const Productos=require('../controladores/productos.controlador');




/*=============================================
CREAR RUTAS HTTP
=============================================*/

app.get('/mostrar-productos/:filter', Productos.mostrarProductos);




/*=============================================
EXPORTAR LA RUTA
=============================================*/

module.exports= app;