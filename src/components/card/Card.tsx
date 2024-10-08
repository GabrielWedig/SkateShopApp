import { Button } from '..'
import * as S from './style'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  image: string
}

export const Card = ({ title, image, ...rest }: CardProps) => {
  return (
    <S.Card {...rest}>
      <S.Image url={image} />
      <Button variant='seeMore'>{title}</Button>
    </S.Card>
  )
}
