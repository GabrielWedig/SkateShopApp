import { ButtonVariant, elements } from './variants'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: ButtonVariant
}

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  const Element = elements[variant]
  return <Element {...rest}>{children}</Element>
}
