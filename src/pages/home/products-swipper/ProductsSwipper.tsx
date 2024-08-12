import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard, SwipperNavigation } from '../../../components'
import * as S from './style'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

interface Product {
  id: number
  photo: string
  title: string
  brand: string
  price: number
  inStock: boolean
  promo: string | null
}

interface ProductsSwipperProps {
  title: string
  products: Product[]
}

export const ProductsSwipper = ({ title, products }: ProductsSwipperProps) => {
  return (
    <S.ProductsSwipper>
      <S.Title>{title}</S.Title>
      <div>
        <Swiper
          slidesPerView={4}
          loop={true}
          modules={[Navigation]}
          spaceBetween={30}
        >
          {products.map((p) => (
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
      </div>
    </S.ProductsSwipper>
  )
}
