const ProductModel = require('../models/Product')
const jwt = require('jsonwebtoken');
const { isTokenValid } = require('../config/helper');
const { jwtSecret } = require('../constants');


const getAll = async (req, res) => {
    try {
        let products = await ProductModel.find()

        const { token } = req.signedCookies;

        if (!token) {
            products = await ProductModel.find().select('-price')
        }

        return res.status(200).json({
            status: 200,
            products
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }
}
const getOne = async (req, res) => {
    try {
        const { token } = req.signedCookies;

        let product = await ProductModel.findOne({ _id: req.params.id })

        if (!token) {
            product = await ProductModel.findOne({ _id: req.params.id }).select('-price')
        }

        if (!product) {
            res.status(400).json({
                status: 400,
                msg: 'Product not found',
            });
        }

        return res.status(200).json({
            status: 200,
            product
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }

}
const updateOne = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ _id: req.params.id })

        if (!product) {
            res.status(400).json({
                status: 400,
                msg: 'Product not found',
            });
        }

        await ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body)

        return res.status(200).json({
            status: 200,
            msg: 'Update product successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }

}
const deleteOne = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            status: 200,
            msg: 'Delete product successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }
}

const createOne = async (req, res, next) => {
    const product = new ProductModel({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
    })

    try {
        await product.save()

        return res.status(201).json({
            status: 201,
            msg: 'Create product successfully'
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error'
        });
    }
}
module.exports = {
    getAll, getOne, createOne, updateOne, deleteOne
}