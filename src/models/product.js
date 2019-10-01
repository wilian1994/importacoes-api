'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [false, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    active: {
        type: Boolean,
        required: false,
        default: true
    },
    tags: [{
        type: String,
        required: false
    }],
    image: {
        type: String,
        required: false,
        trim: true
    }
});

module.exports  = mongoose.model('Product', schema);    