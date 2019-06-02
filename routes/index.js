const express = require('express')
const router = express.Router()
var paypal = require('paypal-rest-sdk');

const productoControllers = require('../controllers/database/productos');
const controllers = require('../controllers/index')

router.get('/pay/:price', (req, res) => {
    let price = req.params.price

    var create_payment_json = {
        "intent": "authorize",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/",
            "cancel_url": "http://localhost:3000/"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Carrito",
                    "sku": "ShoppingCart",
                    "price": price,
                    "currency": "MXN",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "MXN",
                "total": price
            },
            "description": "La compra de tu carrito"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            for (var index = 0; index < payment.links.length; index++) {
                if (payment.links[index].rel === 'approval_url') {
                    res.json(payment.links[index])
                }
            }
        }
    });
    
    
})
 
router.get('/', controllers.index)
router.get('/Productos/:type', productoControllers.Productos)

router.get('/about', controllers.about)
router.get('/login', controllers.login)
router.get('/signin', controllers.signin)
router.get('/terms', controllers.terms)
router.get('/politics', controllers.politics)

router.get('*', controllers.error)

module.exports = router
