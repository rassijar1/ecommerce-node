/*=============================================
ESQUEMA PARA MODELO CONECTOR A MONGODB
=============================================*/
const mongoose = require('mongoose');

let Schema= mongoose.Schema;
let productosSchema= new Schema({

	product: {
		type: Object,
		required: [true, "El producto es obligatorio"],
		name: {
			type: String,
			required:  [true, "El nombre es obligatorio"]
		},
		category: {
			type: String,
			required:  [true, "La categoría es obligatoria"]
		}
	}

})


/*=============================================
EXPORTAR EL MODELO
=============================================*/
module.exports= mongoose.model("productos", productosSchema);
