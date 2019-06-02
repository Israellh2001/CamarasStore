const cliente = require('../../models/cliente')
const mongoose = require('mongoose');


const getCliente = async (req, res) => {
  var name = req.params.name
  var pass = req.params.pass

  cliente.findOne({Nombre: name, Contraseña: pass}, (err, row) => {
      if (row) {
          res.render('index', {row: row})
      }else {
        res.redirect('/signin')
      }
  })
}

const getClientes = async (req, res) =>
{
  var rows = await cliente.find()
  res.render('admin/clients', {
    rows: rows
  })
}

const postCliente = async(req, res) => {
  cliente.create(req.body, (err, rows) => {
    if(err)
      console.log("Ocurrio un error");
    res.redirect('/admin/clients')
  })
}
const Delete = async(req, res) => {
    let id  = req.params.id;
    cliente.findOneAndDelete({'_id' : id}, (err) => {
        if(!err){
          res.redirect("/admin/clients")
        }
        else {
          console.log("Ocurrio un error"+ err);
        }
    })
}

const update = (req, res) => {
  let id = req.body._id
  let body = req.body

  cliente.findOneAndUpdate({'_id' : id}, body , {new: true}, (err) => {
      if(err)
        console.log(err)
      else
        res.json({
          success: true
        })
    }
  )
}

const getClienteByName = async (req, res) => {
  let name = req.params.name
  cliente.findOne({Nombre: name}, (err, row) => {
    if (row) {
        res.status(200).json({
          success: true, row
        })
    }else {
      res.status(500).json({
        success: false
      })
    }
  })
}

module.exports = {
  getCliente: getCliente,
  getClientes: getClientes,
  postCliente: postCliente,
  Delete: Delete,
  updateCliente: update,
  getClienteByName: getClienteByName
}
