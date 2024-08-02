import * as S from './style'
import mock from './mock.json'

export const TopBar = () => {
  return (
    <S.TopBar>
      <S.Slider>
        {mock.map((content, i) => (
          <S.Item key={i}>{content}</S.Item>
        ))}
      </S.Slider>
      <S.Slider>
        {mock.map((content, i) => (
          <S.Item key={i}>{content}</S.Item>
        ))}
      </S.Slider>
    </S.TopBar>
  )
}
