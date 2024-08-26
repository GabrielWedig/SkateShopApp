import * as S from './style'
import { useEffect, useState } from 'react'
import {
  Paged,
  TopBarMessageData,
  useTopBarMessages,
  useTryCatch
} from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const TopBar = () => {
  const [messages, setMessages] = useState<Paged<TopBarMessageData>>()

  const { getAndSet } = useTryCatch()
  const { getTopBarMessages } = useTopBarMessages()

  useEffect(() => {
    getAndSet(getTopBarMessages({ size: 100 }), setMessages)
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
        {messages?.items.map((m) => (
          <SwiperSlide className="slide" key={m.id}>
            <p>{m.message}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TopBar>
  )
}
