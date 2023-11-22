'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import styles from './productSlide.module.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
type TGallery = {
	image: string[] | undefined
	dataName: string
}

const ProductSlide: FC<TGallery> = ({ image, dataName }) => {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			speed={800}
			loop={true}
			autoplay={{
				delay: 4000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}}
			modules={[Autoplay, Pagination]}
			className={styles.sw}
			pagination={{
				clickable: true
			}}
		>
			{image &&
				image.map(item => (
					<SwiperSlide className={styles.swiper_slide} key={item}>
						<img draggable={false} src={item} alt={dataName} itemProp={item} />
					</SwiperSlide>
				))}
		</Swiper>
	)
}

export default ProductSlide
