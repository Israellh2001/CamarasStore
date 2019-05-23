const usuario = require('../../models/usuario')

const getUsuario = async (req, res) => {
  var id = req.params
  var row = await usuario.findById(id)
  res.json(row)
}

const getUsuarios = async (req, res) =>
{
  var rows = await usuario.find()
  res.render('admin/users', {
    success: true,
    rows: rows
  })
}

const postUsuario = async(req, res) => {
  usuario.create(req.body, (err, rows) => {
    if(err)
      console.log("Ocurrio un error");
    res.redirect('/admin/users')
  })

}

const Delete = async(req, res) => {
    let { id } = req.params.id;
    usuario.findOneAndDelete(id, (err) => {
        if(!err){
          res.redirect("/admin/users")
        }
        else {
          console.log("Ocurrio un error"+ err);
        }
    })
}

const Login = async (req, res) => {
  var name = req.params.name
  var pass = req.params.pass

  usuario.findOne({Nombre: name, Contraseña: pass}, (err, row) => {
      if (row) {
          res.status(200).json({
            success: true
          })
      }else {
        res.status(500).json({
          success: false
        })
      }
  })
}

module.exports = {
  getUsuario: getUsuario,
  getUsuarios: getUsuarios,
  postUsuario: postUsuario,
  Delete: Delete,
  Login: Login
}
