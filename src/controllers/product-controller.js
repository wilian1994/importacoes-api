'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Erro ao cadastrar o produto',
                data: e
            })
        });
}

exports.get = (req, res, next) => {
    Product.find({active: true}, 'title price slug')
        .then(products => {
            res.status(200).send(products)
        })
        .catch(e => res.status(400).send(e))
}

exports.getById = (req, res, next) => {
    Product.findById({slug: req.params.slug}, 'title price slug')
        .then(products => {
            res.status(200).send(products)
        })
        .catch(e => res.status(400).send(e))
}

exports.getBySlug = (req, res, next) => {
    Product.findOne({slug: req.params.slug, active: true}, title, slug)
        .then(result => res.status(200).send(result))
        .catch(e => res.status(400).send(e));
}

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.params.id)
        .then(e => {
            res.status(201).send({
                message: "Produto removido com sucesso"
            })
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao remover produto", e
            }) 
        })
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then(e => {
        res.status(201).send({
            message: "Produto atualizado com sucesso"
        })
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao atualizar o produto"
        })
    })
};
