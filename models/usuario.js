const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  Nombre: String,
  Contraseña: String,
  Carrio: Array,
  Compras: Array
})

module.exports = mongoose.model('usuario', usuarioSchema);
