'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import './mainSlider.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
const MainSlider = () => {
	return (
		<Swiper
			spaceBetween={0}
			effect={'fade'}
			navigation={true}
			loop={true}
			autoplay={{ delay: 10000, disableOnInteraction: false }}
			pagination={{
				clickable: true
			}}
			modules={[Pagination, Autoplay]}
			className='mySwiper'
		>
			<SwiperSlide>
				<img src='/slideImage/1.jpg' />
			</SwiperSlide>
		</Swiper>
	)
}

export default MainSlider
