import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../../../components'
import * as S from './style'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import images from './photos.json'

export const MainSwipper = () => {
  return (
    <Swiper
      slidesPerView={1}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, EffectFade]}
    >
      {images.map((image) => (
        <SwiperSlide>
          <S.Image url={image}></S.Image>
          <Button
            style={{ position: 'absolute', bottom: '25px', left: '25px' }}
          >
            Ver mais
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
