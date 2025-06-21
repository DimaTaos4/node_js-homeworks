import Member from "../db/Member.js"
import jwt from 'jsonwebtoken'
import HttpExeption from "../utils/HttpExeption.js"
import bcrypt from 'bcrypt'


const generateToken = (userId) => jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" })


export const addMember = async (payload) => {
    const { email } = payload
    if (await Member.findOne({ where: { email } })) {
        throw HttpExeption(400, 'Email is already registrated')
    }
    const hashPassword = await bcrypt.hash(payload.password, 10)
    const result = await Member.create({
        ...payload,
        password: hashPassword
    })
    return { id: result.id, email: result.email, token: generateToken(result.id) }
}

export const loginMember = async (payload) => {
    const { email, password } = payload

    const member = await Member.findOne({ where: { email } })
    if (!member || !(await bcrypt.compare(password, member.password))) {
        // если member нет то вернет null

        throw HttpExeption(401, 'Email or password is not correct');
    }

    return { id: member.id, email: member.email, mustChangePassword: member.mustChangePassword, token: generateToken(member.id) }
}


export const changePassword = async (member, currentPassword, newPassword) => {
    const isMatch = await bcrypt.compare(currentPassword, member.password);

    if (!isMatch) {
        throw HttpExeption(401, 'Неверный текущий пароль');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    member.password = hashedPassword;
    member.mustChangePassword = false;

    await member.save();

    return { message: 'Пароль успешно изменён' };
};

export const deleteAccount = async (member, password) => {
    const isMatch = await bcrypt.compare(password, member.password);

    if (!isMatch) {
        throw HttpExeption(401, 'Неверный пароль');
    }

    await member.destroy();
    return { message: 'Аккаунт удалён' };
};

export const changeEmail = async (member, newEmail, password) => {
    if (!newEmail || !password) {
        throw HttpExeption(400, 'Нужны новый email и пароль');
    }

    const existing = await Member.findOne({ where: { email: newEmail } });
    if (existing) {
        throw HttpExeption(400, 'Email уже занят');
    }

    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch) {
        throw HttpExeption(401, 'Неверный пароль');
    }

    member.email = newEmail;
    await member.save();

    return { message: 'Email успешно изменён' };
};