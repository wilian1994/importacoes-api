'use strict'

const express = require('express')
const router = express.Router()
const productController = require('../controllers/product-controller')


router.post('/', productController.post);

router.delete('/', productController.delete);

router.put('/:id', productController.put);

router.get('/', productController.get);


module.exports = router;