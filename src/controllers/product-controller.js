'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository')

exports.post = (req, res, next) => {
    repository
        .create(req.body)
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

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        })
    }
}
exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(products => {
            res.status(200).send(products)
        })
        .catch(e => res.status(400).send(e))
}

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(result => res.status(200).send(result))
        .catch(e => res.status(400).send(e));
}

exports.delete = (req, res, next) => {
    repository
        .delete(req.params.id)
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
    repository
        .update(id, req.body)
        .then(e => {
            res.status(201).send({
                message: "Produto atualizado com sucesso"
            })
        }).catch(e => {
            res.status(400).send({
                message: "Falha ao atualizar o produto"
            })
        })
};


