const mongoose = require('mongoose');
const Schema = mongoose.Schema

const clienteSchema = new Schema({
  Nombre: String,
  Email: String,
  Contraseña: String,
  Direccion: String,
  Telefono: Number,
  Turno: String,
  Fecha_Ingreso: String,
  Edad: Number,
  Cargo_Area: String,
  Sueldo: Number,
  Sexo: String
})

module.exports = mongoose.model('cliente', clienteSchema);
