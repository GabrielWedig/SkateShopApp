import * as S from './style'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <S.Title>{children}</S.Title>
}
