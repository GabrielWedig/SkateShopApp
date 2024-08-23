import { BaseInput } from '..'
import * as S from './style'

interface PasswordInputProps {
  label?: string
  placeholder?: string
  size?: number
}

export const PasswordInput = ({
  label,
  placeholder,
  size
}: PasswordInputProps) => {
  return (
    <BaseInput label={label} size={size}>
      <input type="password" placeholder={placeholder ?? label} />
    </BaseInput>
  )
}
