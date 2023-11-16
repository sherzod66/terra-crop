'use client'
import { FC, useEffect, useState } from 'react'
import styles from './sellers.module.scss'
import SiteMap from '@/components/ui/siteMap/SiteMap'
import { Regions } from '../admin/form model/region data/regionData'
import { useAdminSeller } from '@/components/hooks/useAdminProduct'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { BsMapFill } from 'react-icons/bs'
import { ISellers } from '@/types/sellers'
import MapPopup from '@/components/ui/model/MapPopup'
import Loader from '@/components/ui/Loader/Loader'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
const Sellers: FC = () => {
	const { isInfo, products } = useAdminSeller()
	const [isShow, setIsShow] = useState<{ show: boolean; data?: ISellers }>({
		show: false
	})
	const filterSellers = (value: string) => {
		const filterSellers = products.filter(seller =>
			seller.region.includes(value)
		)
		return filterSellers
	}
	useEffect(() => animationScroll(styles), [isInfo])
	return (
		<>
			<SiteMap />
			{isShow.show && <MapPopup isShow={isShow} setIsShow={setIsShow} />}
			{isInfo.loading && <Loader />}
			<section className={styles.sellers}>
				<div className={styles.sellers__container}>
					{/* <div className={styles.sellers__titleImage}>
						<img src="" alt="" />
					</div> */}
					<div className={styles.sellers__content}>
						{Regions.map(reg => (
							<div
								id='_anim-items'
								key={reg.id}
								className={cn(styles.sellers__region, styles._anim_none__hide)}
							>
								<p className={styles.RTitle}>{reg.region}</p>
								{filterSellers(reg.region).length > 0
									? filterSellers(reg.region).map(seller => (
											<div key={seller.id} className={styles.sellers__card}>
												{/* <p className={styles.storeName}>{seller.storeName}</p> */}
												<p className={styles.fullName}>{seller.fullName}</p>
												<p className={styles.address}>
													<FaLocationDot />
													{seller.address}
												</p>
												<div className={styles.seller__info}>
													<a href={`tel:${seller.phoneNumber}`}>
														<FaPhone />
														{seller.phoneNumber}
													</a>
													<button
														onClick={() => {
															setIsShow({ show: !isShow.show, data: seller })
															document.body.classList.toggle('lock')
														}}
														className={styles.sellers__map}
													>
														<BsMapFill />
														Xaritada ko'rish
													</button>
												</div>
											</div>
									  ))
									: "Bu hududda sotuvchilar yo'q"}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Sellers
