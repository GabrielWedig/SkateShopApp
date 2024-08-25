import { ButtonVariant, elements } from './variants'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: ButtonVariant
  disabled?: boolean
}

export const Button = ({
  children,
  variant,
  disabled,
  ...rest
}: ButtonProps) => {
  const Element = elements[variant]
  return (
    <Element {...rest} disabled={disabled}>
      {children}
    </Element>
  )
}
