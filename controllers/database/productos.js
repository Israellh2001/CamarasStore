const producto = require('../../models/producto')

const getProducto = async (req, res) => {
  var id = req.params
  var row = await producto.findById(id)
  res.json(row)
}

const getProductos = async (req, res) =>
{
  var rows = await producto.find()
  res.render('admin/products', {
    success: true,
    rows: rows
  })
}

const postProducto = async(req, res) => {
  producto.create(req.body, (err, rows) => {
    if(err)
      console.log("Ocurrio un error");
      res.redirect('/admin/products')
  })

}

const Delete = async(req, res) => {
    let id  = req.params.id;
    producto.findOneAndDelete({'_id' : id}, (err) => {
        if(!err){
          res.redirect("/admin/products")
        }
        else {
          console.log("Ocurrio un error"+ err);
        }
    })
}

const update = (req, res) => {
  let id = req.body._id
  let body = req.body

  producto.findOneAndUpdate({'_id' : id}, body , {new: true}, (err) => {
      if(err)
        console.log(err)
      else
        res.json({
          success: true
        })
    }
  )
}

module.exports = {
  getProducto: getProducto,
  getProductos: getProductos,
  postProducto: postProducto,
  Delete: Delete,
  updateProducto: update
}
