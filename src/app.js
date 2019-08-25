'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const indexRoute = require('./router/index-route')
const productRoute = require('./router/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.use('/', index)
app.use('/products', productRoute)
module.exports = app;