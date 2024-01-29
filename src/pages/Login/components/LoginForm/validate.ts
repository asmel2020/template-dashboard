import * as yup from "yup";

export const schema = yup.object({
    user: yup.string().min(4).required(),
    password: yup.string().min(1).required(),
}).required();

export type FormData = yup.InferType<typeof schema>;