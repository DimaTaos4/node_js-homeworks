import Nutzer from "../db/Nutzer.js"
import bcrypt from 'bcrypt'
import HttpExeption from "../utils/HttpExeption.js"


export const getNutzers = async () => {
    const result = await Nutzer.findAll()
    // if (result.length === 0) throw HttpExeption(404, 'There are no Nutzers')
    return result
}

export const addNutzer = async (payload) => {
    const existingUser = await Nutzer.findOne({ where: { email: payload.email } })
    if (existingUser) {
        const error = new Error("Email already registered")
        error.status = 409
        throw error
    }

    const hashPassword = await bcrypt.hash(payload.password, 10)
    return Nutzer.create({
        ...payload,
        password: hashPassword,
    })
}

export const changeNutzerPassword = async (id, { oldPassword, newPassword }) => {
    const nutzer = await Nutzer.findByPk(id)
    if (!nutzer) return null

    const passwordCompare = await bcrypt.compare(oldPassword, nutzer.password)
    if (!passwordCompare) throw HttpExeption(400, "Old password invalid")
    const hashPassword = await bcrypt.hash(newPassword, 10)
    nutzer.password = hashPassword
    await nutzer.save()
    return nutzer
}
export const deleteNutzer = async (id) => {
    const result = await Nutzer.findByPk(id)
    if (!result) throw HttpExeption(404, `Nutzer with id=${id} not found`)
    await result.destroy()
}