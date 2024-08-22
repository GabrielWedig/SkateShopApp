import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../../../components'
import * as S from './style'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import images from './photos.json'
import { useWindowSize } from '../../../hooks'
//import { useState } from 'react'

export const Main = () => {
  const { windowHeight, windowWidth } = useWindowSize()
  const imageHeight = (windowWidth / window.screen.width) * (windowHeight - 180)

  //const [file, setFile] = useState<File | null>(null)

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setFile(event.target.files[0])
  //   }
  // }

  return (
    <S.Main>
      <Swiper
        slidesPerView={1}
        effect={'fade'}
        loop={true}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        {images.map((image) => (
          <SwiperSlide>
            <S.Image url={image} height={imageHeight}></S.Image>
            <Button variant="seeMore">Ver mais</Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <form>
        <input type="file" name="file" />
        <button>Submit</button>
      </form>
    </S.Main>
  )
}
