import * as S from './style'
import brands from './brands.json'

export const Brands = () => {
  return (
    <S.Brands>
      {brands.map((brand) => (
        <S.Image url={brand} />
      ))}
    </S.Brands>
  )
}
