import * as usersService from '../services/users.service.js'

export const userRegisterController = async (req, res, next) => {
    try {
        const result = await usersService.registerUser(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const userLoginController = async (req, res, next) => {
    try {
        const result = await usersService.loginUser(req.body)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const updateEmailController = async (req, res, next) => {
    try {
        const result = await usersService.updateEmail(req.user, req.body)
        res.status(209).json(result)
    } catch (error) {
        next(error)
    }
}

export const deleteEmailController = async (req, res, next) => {
    try {
        await usersService.deleteEmail(req.user, req.body)
        res.status(200).json({           // 204 статус более правильный когда ничего не надо передавать  
            message: "User was deleted"
        })
    } catch (error) {
        next(error)
    }
}

export const updateRoleController = async (req, res, next) => {
    try {
        const result = await usersService.updateRole(req.user, req.body)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const refreshTokenController = async (req, res, next) => {
    try {
        const result = await usersService.refreshToken(req.headers)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

