const ventas = require('../../models/ventas')
const producto = require('../../models/producto')
const empleado = require('../../models/empleado')

const getVenta = async (req, res) => {
    var productos = await producto.find()
    var empleados = await empleado.find()

    res.render('admin/ventas', { productos, empleados})
}

const postVenta = (req, res) => {
    ventas.create(req.body, (err, rows) => {
        res.redirect('/admin/ventas')
      })
}

module.exports = {
    getVenta: getVenta,
    postVenta: postVenta
}