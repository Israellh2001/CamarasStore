const usuario = require('../../models/ventas')

const getVenta = (req, res) => {
    res.render('admin/ventas')
}

const postVenta = (req, res) => {

}

module.exports = {
    getVenta: getVenta,
    postVenta: postVenta
}