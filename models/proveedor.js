const mongoose = require('mongoose');
const Schema = mongoose.Schema

const proveedorSchema = new Schema({
  Nombre: String,
  Email: String,
  Direccion: String,
  Telefono: Number,
  Fecha_Surte: String,
  Marca: String,
  Tipo_Producto: String,
  Empresa: String
})

module.exports = mongoose.model('proveedor', proveedorSchema);
