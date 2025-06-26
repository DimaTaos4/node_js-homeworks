import * as productsService from '../services/products.service.js'

export const addProductsController = async (req, res, next) => {
    try {
        const result = await productsService.addProducts(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const getPopulateProductsController = async (req, res, next) => {
    try {
        const result = await productsService.getPopulateProducts()
        res.json(result)
    } catch (error) {

        next(error)
    }
}