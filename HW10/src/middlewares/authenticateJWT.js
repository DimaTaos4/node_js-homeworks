import jwt from "jsonwebtoken"
import HttpExeption from "../utils/HttpExeption.js"
import User from "../db/User.js"

const { JWT_SECRET } = process.env

export const authenticate = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) return next(HttpExeption(401, "Authorization missing"))

    const [type, token] = authorization.split(" ")

    if (type !== "Bearer") return next(HttpExeption(401, "Bearer missing"))

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        const user = await User.findOne({ where: { email: decoded.email } }) // или decoded.id
        if (!user) return next(HttpExeption(401, "User not found"))

        req.user = user
        next()
    } catch (error) {
        console.error(error.message)
        return next(HttpExeption(401, "Invalid token"))
    }
}

export const isAdmin = async (req, res, next) => {
    if (req.user.role !== "admin") return next(HttpExeption(403, "Not allow"))
    next()
}