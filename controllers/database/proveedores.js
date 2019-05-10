const proveedor = require('../../models/proveedor')

const getProveedor = async (req, res) => {
  var id = req.params
  var row = await proveedor.findById(id)
  res.json(row)
}

const getProveedores = async (req, res) =>
{
  var rows = await proveedor.find()
  res.render('admin/providers', {
    success: true,
    rows: rows
  })
}

const postProveedor = async(req, res) => {
  proveedor.create(req.body, (err, rows) => {
    if(err)
      console.log("Ocurrio un error");
    res.redirect('/admin/providers')
  })
}

const Delete = async(req, res) => {
    let { id } = req.params.id;
    proveedor.findOneAndDelete(id, (err) => {
        if(!err){
          res.redirect("/admin/providers")
        }
        else {
          console.log("Ocurrio un error"+ err);
        }
    })
}

module.exports = {
  getProveedor: getProveedor,
  getProveedores: getProveedores,
  postProveedor: postProveedor,
  Delete: Delete
}
