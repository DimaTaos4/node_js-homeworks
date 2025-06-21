import bcrypt from "bcrypt"
import User from "../db/User.js"
import jwt from "jsonwebtoken"
import HttpExeption from "../utils/HttpExeption.js"

export const registerUser = async (payload) => {
    const { username, email, password, role } = payload
    const existingEmail = await User.findOne({ where: { email } })
    if (existingEmail) throw HttpExeption(400, "This email is already exists")
    const hashPassword = await bcrypt.hash(password, 10)
    const JWT_SECRET = process.env.JWT_SECRET

    const data = {
        username: username,
        email: email,
        password: hashPassword,
        role
    }
    await User.create(data)

    const token = jwt.sign({ id: data.id, email: data.email }, JWT_SECRET, { expiresIn: "24h" })

    return {
        username: username,
        email: email,
        token: token
    }
}

export const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } })
    if (!user) throw HttpExeption(404, `User with email=${email} not found`)
    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) throw HttpExeption(401, "Passsowrd is not correct")
    const JWT_SECRET = process.env.JWT_SECRET
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "24h" })
    user.token = token
    await user.save()
    return ({
        email: user.email,
        token: user.token
    })
}

export const updateEmail = async (user, { password, newEmail }) => {

    const foundUser = await User.findByPk(user.id)
    if (!foundUser) throw HttpExeption(401, 'User not found')

    const comparePassword = await bcrypt.compare(password, foundUser.password)
    if (!comparePassword) throw HttpExeption(401, "Passsowrd is not correct")

    foundUser.email = newEmail
    await foundUser.save()
    return ({
        name: foundUser.username,
        email: foundUser.email
    })
}

export const deleteEmail = async (user, { password }) => {
    const foundUser = await User.findByPk(user.id)
    if (!foundUser) throw HttpExeption(401, "User not found")
    const comparePassword = await bcrypt.compare(password, foundUser.password)
    if (!comparePassword) throw HttpExeption(401, "Password invalid")
    await foundUser.destroy()
}

export const updateRole = async (user, { id, newRole }) => {
    // if (user.role !== "admin") throw HttpExeption(403, "Not allow")
    const foundUser = await User.findByPk(id)
    if (!foundUser) throw HttpExeption(404, "User not found")
    foundUser.role = newRole
    await foundUser.save()
    return {
        username: foundUser.username,
        email: foundUser.email,
        role: foundUser.role
    }
}

export const refreshToken = async (headers) => {
    const { authorization } = headers
    const JWT_SECRET = process.env.JWT_SECRET

    if (!authorization) throw HttpExeption(401, "Authorization header missing")

    const [type, token] = authorization.split(" ")

    if (type !== "Bearer" || !token) throw HttpExeption(401, "Invalid token format")

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        const user = await User.findByPk(decoded.id)

        if (!user) throw HttpExeption(404, "User not found")

        // Создаём новый токен
        const newToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: "24h"
        })

        return {
            token: newToken
        }
    } catch (error) {
        throw HttpExeption(401, "Invalid or expired token")
    }
}
