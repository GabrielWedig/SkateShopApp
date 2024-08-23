import * as S from './style'
import { Button, Container, PasswordInput, TextInput } from '../../components'
import { IoIosArrowForward } from 'react-icons/io'

export const Login = () => {
  return (
    <Container>
      <S.Box>
        <S.Login>
          <h2>Já tem uma conta?</h2>
          <form>
            <TextInput label="Email" />
            <PasswordInput label="Senha" />
            {/* <button>Esqueci minha senha</button> */}
            <Button variant="primary">
              <span>Entrar</span>
              <IoIosArrowForward />
            </Button>
          </form>
        </S.Login>
        <S.Register>
          <h2>Quero fazer uma conta</h2>
          <form>
            <TextInput label="Nome Completo" />
            <TextInput label="Email" />
            <PasswordInput label="Senha" />
            <PasswordInput label="Confirme a Senha" />
            <Button variant="primary">
              <span>Registrar</span>
              <IoIosArrowForward />
            </Button>
          </form>
        </S.Register>
      </S.Box>
    </Container>
  )
}
