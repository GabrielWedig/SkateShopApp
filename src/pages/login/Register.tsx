import * as S from './style'
import { Button, PasswordInput, TextInput } from '../../components'
import { IoIosArrowForward } from 'react-icons/io'
import { FieldValues, useForm } from 'react-hook-form'
import { RegisterUserRequest, useTryCatch, useUsers } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './schema'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const Register = () => {
  const { register } = useUsers()
  const { callApi } = useTryCatch()

  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const handleFormSubmit = async (values: FieldValues) => {
    const request = {
      name: values.name,
      email: values.email,
      password: values.password
    }

    const { success } = await callApi(register(request as RegisterUserRequest))

    if (success) {
      navigate('/')
    }
  }

  return (
    <S.Register>
      <h2>Quero fazer uma conta</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextInput label="Nome Completo" name="name" control={control} />
        <TextInput label="Email" name="email" control={control} />
        <PasswordInput label="Senha" name="password" control={control} />
        <PasswordInput
          label="Confirme a Senha"
          name="confirmPassword"
          control={control}
        />
        <Button variant="primary">
          <span>Registrar</span>
          <IoIosArrowForward />
        </Button>
      </form>
    </S.Register>
  )
}
