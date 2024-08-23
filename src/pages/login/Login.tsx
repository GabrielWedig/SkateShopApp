import * as S from './style'
import { Button, Container, PasswordInput, TextInput } from '../../components'
import { IoIosArrowForward } from 'react-icons/io'
import { FieldValues, useForm } from 'react-hook-form'
import { Register } from './Register'
import { LoginRequest, useTryCatch, useUsers } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './schema'

interface FormData {
  email: string
  password: string
}

export const Login = () => {
  const { login } = useUsers()
  const { callApi } = useTryCatch()

  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const handleFormSubmit = async (values: FieldValues) => {
    const { success } = await callApi(login(values as LoginRequest))

    if (success) {
      navigate('/')
    }
  }

  return (
    <Container>
      <S.Box>
        <S.Login>
          <h2>Já tem uma conta?</h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <TextInput label="Email" name="email" control={control} />
            <PasswordInput label="Senha" name="password" control={control} />
            {/* <button>Esqueci minha senha</button> */}
            <Button variant="primary">
              <span>Entrar</span>
              <IoIosArrowForward />
            </Button>
          </form>
        </S.Login>
        <Register />
      </S.Box>
    </Container>
  )
}
