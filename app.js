const express = require('express')
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const paypal = require('paypal-rest-sdk')

const app = express()

paypal.configure( {
  'mode': 'sandbox',
  'client_id': 'AUBeUO3hhNwBfx06DocOdGYDz1rHw-0mINP6x8_wigHy-OozNgfs45BRS2W0NlLr1GThXqpB-oUctQbA',
  'client_secret': 'EARzYgeSdykurEpMj3UVesNPenge36fkepwyYgFLqyli2K_gkh4ZDUMxXtyhYljZnvU_C8zlGH-tiyNZ'
});

mongoose.connect('mongodb://root:MfuZZZBLXShFyu2@ds059672.mlab.com:59672/camrasstore', { useNewUrlParser: true})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

//require routes
const routes = require('./routes/index')
const Adminroutes = require('./routes/admin')
const routes_api = require('./routes/db')

app.use(express.static(path.join(__dirname, 'public')))

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//routes
app.use('/admin',Adminroutes)
app.use( '/admin' , routes_api)
app.use(routes)

//static files
app.use(express.static(path.join(__dirname, 'public')))

//start server
app.listen(app.get('port'), () =>
  console.log("Server on port", app.get('port')
  )
)
