import * as S from './style'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
