import jwt from 'jsonwebtoken'
import Member from '../db/Member.js'
import HttpExeption from '../utils/HttpExeption.js';


const { JWT_SECRET } = process.env;
export const authenticate = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) throw HttpExeption(401, "Authorization header missing")
    const [bearer, token] = authorization.split(' ')
    if (bearer !== "Bearer") throw HttpExeption(401, 'Bearer missing')

    try {
        const { id } = jwt.verify(token, JWT_SECRET)
        const member = await Member.findByPk(id)
        if (!member) {
            return next(HttpExeption(401, "Member not found"))
        }
        req.member = member
        next()
    } catch (error) {
        throw HttpExeption(401, error.message)
    }
}

export const isAdmin = (req, res, next) => {
    if (req.member.role !== "admin") throw HttpExeption(403, "Not allow")
    next()
}
