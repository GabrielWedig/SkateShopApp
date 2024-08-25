import { BaseInput, Error } from '..'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import { ChangeEvent } from 'react'

interface PasswordInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  control: Control<TFieldValues>
  label?: string
  placeholder?: string
  onChange?: (value: string) => void
}

export const PasswordInput = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  label,
  placeholder,
  onChange
}: PasswordInputProps<TFieldValues>) => {
  const { fieldState, field } = useController({ name, control })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      onChange?.call(null, event.target.value)
    } finally {
      field.onChange(event.target.value)
    }
  }

  return (
    <BaseInput label={label}>
      <input
        {...field}
        type="password"
        placeholder={placeholder ?? label}
        onChange={handleChange}
        value={field.value ?? ''}
        className={fieldState.error ? 'error' : ''}
      />
      <Error message={fieldState.error?.message} />
    </BaseInput>
  )
}
