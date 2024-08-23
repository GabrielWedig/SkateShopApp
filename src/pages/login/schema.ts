import * as yup from 'yup'

const common = {
  email: yup.string().email('Email inválido.').required('Campo Obrigatório.'),
  password: yup.string().required('Campo Obrigatório.')
}

export const loginSchema = yup.object().shape(common)

export const registerSchema = yup.object().shape({
  ...common,
  name: yup.string().required('Campo Obrigatório.'),
  confirmPassword: yup
    .string()
    .required('Campo Obrigatório.')
    .oneOf([yup.ref('password')], 'As senhas não são iguais.')
})
