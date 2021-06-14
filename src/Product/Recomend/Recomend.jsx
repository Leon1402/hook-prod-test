import { Swiper, SwiperSlide } from 'swiper/react'
import { CardSmall } from '../Card/CardSmall'
import './Recomend.css';
import 'swiper/swiper-bundle.css';

export const Recomend = () => {
  return (
    <div className="recomend">
      <h2 className="recomend__title title">
        Buy with this product
      </h2>
      <Swiper spaceBetween={8}
        slidesPerView={2}
        freeMode={true}>
          <SwiperSlide><CardSmall /></SwiperSlide>
          <SwiperSlide><CardSmall /></SwiperSlide>
          <SwiperSlide><CardSmall /></SwiperSlide>
          <SwiperSlide><CardSmall /></SwiperSlide>
          <SwiperSlide><CardSmall /></SwiperSlide>
      </Swiper>

    </div>
  )
}
