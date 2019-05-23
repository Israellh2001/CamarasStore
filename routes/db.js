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

router.get('/api/empleado/:id', empleadoControllers.getEmpleado)
router.get('/employees', empleadoControllers.getEmpleados)
router.post('/empleado', empleadoControllers.postEmpleado)
router.get('/empleado/delete/:id', empleadoControllers.Delete)

router.get('/api/prducto/:id', productoControllers.getProducto)
router.get('/products', productoControllers.getProductos)
router.post('/producto', productoControllers.postProducto)
router.get('/producto/delete/:id', productoControllers.Delete)

router.get('/api/proveedor/:id', proveedorControllers.getProveedor)
router.get('/providers', proveedorControllers.getProveedores)
router.post('/proveedor', proveedorControllers.postProveedor)
router.get('/proveedor/delete/:id', proveedorControllers.Delete)

router.get('/api/usuario/:id', usuarioControllers.getUsuario)
router.get('/users', usuarioControllers.getUsuarios)
router.post('/usuario', usuarioControllers.postUsuario)
router.get('/usuario/delete/:id', usuarioControllers.Delete)
router.get('/api/login/:name/:pass', usuarioControllers.Login)


module.exports = router
