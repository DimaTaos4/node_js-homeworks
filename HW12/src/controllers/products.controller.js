import * as productsService from '../services/products.service.js'

import HttpExeption from '../utils/HttpExeption.js'

export const addProductController = async (req, res, next) => {
    try {
        const result = await productsService.addProduct(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const getAllProductController = async (req, res, next) => {
    try {
        const result = await productsService.getAllProducts()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const getProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsService.getProductById(id)
        if (!result) throw HttpExeption(404, "Product not found")
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const changeProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsService.changeProductById(id, req.body)
        if (!result) throw HttpExeption(404, "Product not found")
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const deleteProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await productsService.deleteProductById(id)
        if (!result) throw HttpExeption(404, "Product not found")
        res.json({
            message: `Product with id=${id} was deleted`
        })
    } catch (error) {
        next(error)
    }
}