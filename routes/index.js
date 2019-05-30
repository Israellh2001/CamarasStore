const express = require('express')
const router = express.Router()

const productoControllers = require('../controllers/database/productos');
const controllers = require('../controllers/index')
 
router.get('/', controllers.index)
router.get('/Productos/:type', productoControllers.Productos)

router.get('/about', controllers.about)
router.get('/login', controllers.login)
router.get('/signin', controllers.signin)
router.get('/terms', controllers.terms)
router.get('/politics', controllers.politics)

router.get('*', controllers.error)

module.exports = router
