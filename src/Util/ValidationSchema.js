import {boolean, object, string, ref} from 'yup';
export const loginSchema = object({
    email: string().email().required("Please Enter Your Email Address."),
    password: string().min(6).required("Password Can not be Empty"),
    remember: boolean()
})
export const emailSchema = object({
    email: string().email().required("Please Enter Your Email Address."),
})
export const changePassword = object({
    password: string().min(6).required("Password Can not be Empty"),
    confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match').required("Password Can not be Empty")
})