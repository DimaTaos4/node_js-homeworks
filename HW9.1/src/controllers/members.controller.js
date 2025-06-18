import * as memberService from '../services/members.service.js'
import { emailAddSchema, loginSchema } from '../validation/member.schema.js'
import validateBody from '../utils/validateBody.js'


export const addMembersController = async (req, res, next) => {
    try {
        await validateBody(emailAddSchema, req.body)
        const result = await memberService.addMember(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const loginMembersController = async (req, res, next) => {
    try {
        await validateBody(loginSchema, req.body)
        const result = await memberService.loginMember(req.body)
        res.json(result)
    } catch (error) {
        next(error)
    }
}
export const getProfile = async (req, res, next) => {
    try {
        const { id, email, role, mustChangePassword } = req.member
        res.json({ id, email, role, mustChangePassword })
    } catch (error) {
        next(error)
    }
}

export const changePassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Нужны текущий и новый пароль' });
        }

        const result = await memberService.changePassword(req.member, currentPassword, newPassword);
        res.json(result);
    } catch (err) {
        next(err);
    }
};
export const deleteAccount = async (req, res, next) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Пароль обязателен' });
        }

        const result = await memberService.deleteAccount(req.member, password);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const changeEmail = async (req, res, next) => {
    try {
        const { newEmail, password } = req.body;
        const result = await memberService.changeEmail(req.member, newEmail, password);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const getAdmin = (req, res) => {
    res.json({
        message: `Welcome admin ${req.member.admin}`
    })
}