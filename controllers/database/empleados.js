const empleado = require('../../models/empleado')

const getEmpleado = async (req, res) => {
  var id = req.params
  var row = await empleado.findById(id)
  res.json(row)
}

const getEmpleados = async (req, res) =>
{
  var rows = await empleado.find()
  res.render('admin/employees', {
    rows: rows
  })
}

const postEmpleado = async(req, res) => {
  empleado.create(req.body, (err, rows) => {
    if(err)
      console.log("Ocurrio un error");
    res.redirect('/admin/employees')
  })

}

const Delete = async(req, res) => {
    let { id } = req.params.id;
    empleado.findOneAndDelete(id, (err) => {
        if(!err){
          res.redirect("/admin/employees")
        }
        else {
          console.log("Ocurrio un error"+ err);
        }
    })
}

module.exports = {
  getEmpleado: getEmpleado,
  getEmpleados: getEmpleados,
  postEmpleado: postEmpleado,
  Delete: Delete
}
