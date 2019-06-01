const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ventasSchema = new Schema({
    Empleado: {},
    Cliente: {},
    Productos: [],
    Precio: Number
})

module.exports = mongoose.model('ventas',ventasSchema)