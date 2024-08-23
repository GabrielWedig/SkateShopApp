import * as S from './style'
import { Visible } from '../..'
import { VscError } from 'react-icons/vsc'

interface ErrorProps {
  message?: string
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <Visible when={!!message}>
      <S.ErrorBox>
        <VscError />
        <span className="message">{message}</span>
      </S.ErrorBox>
    </Visible>
  )
}
