/*=============================================
IMPORTAR MODELO
=============================================*/

const Productos = require('../modelos/productos.modelo');

/*=============================================
FUNCION GET
=============================================*/

let mostrarProductos = (req, res) => {
  let filtro = req.params.filter;
  //console.log("filtro", filtro);


  Productos.findOne({
      "product.name": filtro
    }, {
      "product.$": 1
    })
    .then((producto) => {
      if (!producto) {
        return res.json({
          status: 404,
          mensaje: "Producto no encontrado",
        });
      }

      busqueda = producto.product[0];

      //let nombre = producto.product[0].name;
      //console.log("nombre", nombre);

      Productos.find()
        .then((sugeridos) => {

          for (let i = 0; i < sugeridos.length; i++) {
            //let productos = sugeridos[i].product;

            let productos = sugeridos[i].product.filter(p => p.name !== filtro);
            //console.log("productos", productos);

            let electronicsCount = 0;
            let groceryCount = 0;

            for (let j = 0; j < productos.length; j++) {
              const categ = productos[j].category;
              if (categ === "electronics") {
                electronicsCount++;
              } else if (categ === "grocery store") {
                groceryCount++;

              }
            }
            //console.log("electronicsCount", electronicsCount);
            //console.log("groceryCount", groceryCount);
            if (electronicsCount > 2) {
              productos = productos.filter(p => p.category === "grosery store");
            }
            if (groceryCount < 2) {
              productos = productos.filter(p => p.category === "electronics").slice(0, 2);
            }

            res.json({
              status: 200,
              producto: busqueda,
              productos_sugeridos: productos
            });
          }

        })
        .catch((err) => {
          if (err) {
            return res.json({
              status: 500,
              mensaje: "Error en la peticion",
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        return res.json({
          status: 500,
          mensaje: "Error en la peticion",
        });
      }
    });
};



/*=============================================
EXPORTAR FUNCIONES DEL CONTROLADOR
=============================================*/

module.exports = {


  mostrarProductos,

}

// app.get('/',function