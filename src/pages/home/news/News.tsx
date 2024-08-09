import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard, SwipperNavigation, Title } from '../../../components'
import * as S from './style'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Navigation } from 'swiper/modules'
import news from './news.json'
import 'swiper/css/navigation'

export const News = () => {
  return (
    <S.News>
      <Title>Novidades</Title>
      <Swiper
        slidesPerView={4}
        loop={true}
        modules={[Navigation]}
        spaceBetween={30}
      >
        {news.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard
              brand={p.brand}
              title={p.title}
              photo={p.photo}
              price={p.price}
              outStock={!p.inStock}
              promo={p.promo}
            />
          </SwiperSlide>
        ))}
        <SwipperNavigation />
      </Swiper>
    </S.News>
  )
}
