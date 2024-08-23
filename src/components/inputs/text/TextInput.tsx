import { BaseInput } from '../base/BaseInput'
import * as S from './style'

interface TextInputProps {
  label?: string
  placeholder?: string
  size?: number
}

export const TextInput = ({ label, placeholder, size }: TextInputProps) => {
  return (
    <BaseInput label={label} size={size}>
      <input type="text" placeholder={placeholder ?? label} />
    </BaseInput>
  )
}
