import * as categoriesService from '../services/categories.service.js'

import HttpExeption from '../utils/HttpExeption.js'

export const addCategoriesController = async (req, res, next) => {
    try {
        const result = await categoriesService.addCategories(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}