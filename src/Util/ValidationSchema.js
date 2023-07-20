import {boolean, object, string,} from 'yup';
export const loginSchema = object({
    email: string().email().required("Please Enter Your Email Address."),
    password: string().min(6).required("Password Can not be Empty"),
    remember: boolean()
})
export const emailSchema = object({
    email: string().email().required("Please Enter Your Email Address."),
})