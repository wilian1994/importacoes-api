'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:admin@cluster0-vyiiw.mongodb.net/importacoes?retryWrites=true&w=majority";
//Initing mongoose
mongoose.connect(uri,  { useNewUrlParser: true })


const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/products-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.use('/', indexRoute)
app.use('/products', productRoute)
module.exports = app;