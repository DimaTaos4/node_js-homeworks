import * as nutzerService from '../services/nutzer.service.js'
import { addNutzerSchema, changePasswordSchema } from '../validations/nutzer.schema.js'
import validateBody from '../utils/validateBody.js'



export const getNutzersController = async (req, res, next) => {
    try {
        const result = await nutzerService.getNutzers()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const addNutzerController = async (req, res, next) => {
    try {
        await validateBody(addNutzerSchema, req.body)
        const result = await nutzerService.addNutzer(req.body)
        res.status(201).json(`nutzer with email ${result.email} was added`)
    } catch (error) {
        next(error)
    }
}

export const changePasswordController = async (req, res, next) => {
    try {
        await validateBody(changePasswordSchema, req.body)
        const { id } = req.params
        await nutzerService.changeNutzerPassword(id, req.body)
        res.json({
            message: "Password change successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const deleteNutzerController = async (req, res, next) => {
    try {
        const { id } = req.params
        await nutzerService.deleteNutzer(id)
        res.json({
            message: `Nutzer with id=${id} was deleted`
        })
    } catch (error) {
        next(error)
    }
}