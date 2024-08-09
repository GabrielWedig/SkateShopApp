import * as S from './style'

interface ProductCardProps {
  title: string
  photo: string
  price: number
  brand: string
  outStock: boolean
  promo: string | null
}

export const ProductCard = ({
  title,
  photo,
  price,
  brand,
  outStock,
  promo
}: ProductCardProps) => {
  return (
    <S.Product>
      <S.ImageBox>
        <S.Image url={photo}></S.Image>
        {promo ? <S.Card>{promo}</S.Card> : <></>}
        {outStock ? <S.Card>Sem Estoque</S.Card> : <></>}
      </S.ImageBox>
      <S.Description>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{price} R$</p>
      </S.Description>
    </S.Product>
  )
}
