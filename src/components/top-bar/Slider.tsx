import { TopBarMessageData } from '../../hooks/api'
import * as S from './style'

interface SliderProps {
  messages: TopBarMessageData[]
}

export const Slider = ({ messages }: SliderProps) => {
  return (
    <S.Slider>
      {messages.map((m) => (
        <S.Item key={m.id}>{m.message}</S.Item>
      ))}
    </S.Slider>
  )
}
