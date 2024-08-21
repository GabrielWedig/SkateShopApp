import * as S from './style'
import { useEffect, useState } from 'react'
import { TopBarMessageData, useTopBarMessages, useTryCatch } from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const TopBar = () => {
  const [messages, setMessages] = useState<TopBarMessageData[]>([])

  const { getAndSet } = useTryCatch()
  const { getMessages } = useTopBarMessages()

  useEffect(() => {
    getAndSet(getMessages(), setMessages)
  }, [])

  return (
    <S.TopBar>
      <Swiper
        slidesPerView={1}
        loop={true}
        direction="vertical"
        modules={[Autoplay]}
        allowTouchMove={false}
        className="swipper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
      >
        {messages.map((m) => (
          <SwiperSlide className="slide" key={m.id}>
            <p>{m.message}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TopBar>
  )
}
