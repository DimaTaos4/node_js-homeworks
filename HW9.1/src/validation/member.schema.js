import * as Yup from 'yup'
import { emailValidation, passwordValidation } from "../constants/member.constants.js";


export const emailSchema = Yup.string()
    .trim()
    .matches(
        emailValidation.value,
        emailValidation.message)
    .required();

export const passwordSchema = Yup.string()
    .trim()
    .min(6)
    .matches(
        passwordValidation.value,
        passwordValidation.message
    )
    .required();


export const emailSchemaLogin = Yup.string()
    .trim()
    .email()
    .required();

export const passwordSchemaLogin = Yup.string()
    .trim()
    .required();

export const emailAddSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
})
export const loginSchema = Yup.object({
    email: emailSchemaLogin,
    password: passwordSchemaLogin
})