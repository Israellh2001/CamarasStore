const express = require('express')
const router = express.Router()

const clienteControllers = require('../controllers/database/clientes');
const empleadoControllers = require('../controllers/database/empleados');
const productoControllers = require('../controllers/database/productos');
const proveedorControllers = require('../controllers/database/proveedores');
const usuarioControllers = require('../controllers/database/usuarios');



router.get('/api/cliente/:name/:pass', clienteControllers.getCliente)
router.get('/clients', clienteControllers.getClientes)
router.post('/cliente', clienteControllers.postCliente)
router.get('/cliente/delete/:id', clienteControllers.Delete)
router.post('/cliente/update', clienteControllers.updateCliente)


router.get('/api/empleado/:id', empleadoControllers.getEmpleado)
router.get('/employees', empleadoControllers.getEmpleados)
router.post('/empleado', empleadoControllers.postEmpleado)
router.get('/empleado/delete/:id', empleadoControllers.Delete)
router.post('/empleado/update', empleadoControllers.updateEmpleado)


router.get('/api/prducto/:id', productoControllers.getProducto)
router.get('/products', productoControllers.getProductos)
router.post('/producto', productoControllers.postProducto)
router.get('/producto/delete/:id', productoControllers.Delete)
router.post('/producto/update', productoControllers.updateProducto)

router.get('/api/proveedor/:id', proveedorControllers.getProveedor)
router.get('/providers', proveedorControllers.getProveedores)
router.post('/proveedor', proveedorControllers.postProveedor)
router.get('/proveedor/delete/:id', proveedorControllers.Delete)
router.post('/proveedor/update', proveedorControllers.updateProveedor)


router.get('/api/usuario/:id', usuarioControllers.getUsuario)
router.get('/users', usuarioControllers.getUsuarios)
router.post('/usuario', usuarioControllers.postUsuario)
router.get('/usuario/delete/:id', usuarioControllers.Delete)
router.get('/api/login/:name/:pass', usuarioControllers.Login)
router.post('/usuario/update', usuarioControllers.updateUsuario)
router.post('/usuario/producto/:id', usuarioControllers.addProducto)


module.exports = router
