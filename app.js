const express = require('express')
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://localhost/d2store', { useNewUrlParser: true})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

//require routes
const routes = require('./routes/index')
const Adminroutes = require('./routes/admin')
const routes_api = require('./routes/db')

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
