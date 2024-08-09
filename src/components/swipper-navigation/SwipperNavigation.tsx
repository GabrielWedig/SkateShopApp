import { useSwiper } from 'swiper/react'
import * as S from './style'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'

export const SwipperNavigation = () => {
  const swipper = useSwiper()

  return (
    <S.Navigation>
      <button onClick={() => swipper.slidePrev()}>
        <CiCircleChevLeft size={40} />
      </button>
      <button onClick={() => swipper.slideNext()}>
        <CiCircleChevRight size={40} />
      </button>
    </S.Navigation>
  )
}
