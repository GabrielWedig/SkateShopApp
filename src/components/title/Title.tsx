import * as S from './style'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return (
    <S.TitleBox>
      <S.Border></S.Border>
      <h2>{children}</h2>
      <S.Border></S.Border>
    </S.TitleBox>
  )
}
