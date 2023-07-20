import {boolean, object, string,} from 'yup';
export const loginSchema = object({
    email: string().email().required("Please Enter Your Email Address."),
    password: string().min(6).required(),
    remember: boolean()
})