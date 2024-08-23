import { Visible } from '../..'
import * as S from './style'

interface BaseInputProps {
  children: React.ReactNode
  label?: string
  size?: number
}

export const BaseInput = ({ label, size, children }: BaseInputProps) => {
  return (
    <S.InputBox size={size}>
      <Visible when={!!label}>
        <S.Label>{label}</S.Label>
      </Visible>
      {children}
    </S.InputBox>
  )
}
