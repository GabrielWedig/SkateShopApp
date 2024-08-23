import { Visible } from '../..'
import * as S from './style'

interface BaseInputProps {
  children: React.ReactNode
  label?: string
}

export const BaseInput = ({ label, children }: BaseInputProps) => {
  return (
    <S.InputBox>
      <Visible when={!!label}>
        <S.Label>{label}</S.Label>
      </Visible>
      {children}
    </S.InputBox>
  )
}
