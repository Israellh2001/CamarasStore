const mongoose = require('mongoose');
const Schema = mongoose.Schema

const clienteSchema = new Schema({
  Nombre: String,
  Email: String,
  Contraseña: String,
  Direccion: String,
  Telefono: Number,
  Edad: Number,
  Sexo: String
})

module.exports = mongoose.model('cliente', clienteSchema);
