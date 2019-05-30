const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productoSchema = new Schema({
  Nombre: String,
  Marca: String,
  Descripcion: String,
  Existencias: Number,
  Precio_May: Number,
  Precio_Min: Number,
  Tipo_Producto: String,
  urlImage: String
})

module.exports = mongoose.model('producto', productoSchema);
