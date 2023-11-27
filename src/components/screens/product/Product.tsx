'use client'
import { FC } from 'react'
import styles from './product.module.scss'
import { IProduct } from '@/types/product'
import ProductSlide from '@/components/ui/productSlide/ProductSlide'
import SiteMap from '@/components/ui/siteMap/SiteMap'
import { useEffect } from 'react'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
import BuyColumn from '@/components/ui/buy column/BuyColumn'

const Product: FC<{ data: IProduct }> = ({ data }) => {
	console.log(data)
	useEffect(() => animationScroll(styles), [data])
	return (
		<>
			<SiteMap productName={data.name} />
			<main className={styles.product}>
				<div className={styles.product__container}>
					<div itemScope className={styles.product__row}>
						<div
							id='_anim-items'
							className={cn(
								styles.product__imageColumn,
								styles._anim_none__hide
							)}
						>
							<ProductSlide image={data.image} dataName={data.name} />
						</div>
						<div
							id='_anim-items'
							className={cn(
								styles.product__contentColumn,
								styles._anim_none__hide
							)}
						>
							<h1 id='_anim-items' className={styles._anim_none__hide}>
								{data.name}
							</h1>
							<h2 id='_anim-items' className={styles._anim_none__hide}>
								{data.subTitle}
							</h2>
							<p
								itemProp='description'
								id='_anim-items'
								className={styles._anim_none__hide}
							>
								{data.description}
							</p>
							<div
								id='_anim-items'
								className={cn(
									styles.theProduct__table,
									styles._anim_none__hide
								)}
							>
								<ul className={styles.theProduct__table_toxins}>
									<li>Madaniyat</li>
									<li>Qo'llash usuli va iste'mol stavkalari</li>
									<li>Davolanish vaqti va chastotasi</li>
								</ul>
								{data
									? data.table.length > 0
										? data.table.map((info, index) => (
												<ul
													key={index}
													className={styles.theProduct__table_data_toxins}
												>
													<li>{info.culture}</li>
													<li>{info.norm}</li>
													<li>{info.timing}</li>
												</ul>
										  ))
										: ''
									: ''}
							</div>
							<a
								target='_blank'
								href={data.article}
								className={styles.useArticle}
							>
								Foydalanish uchun maqola
							</a>
						</div>
					</div>
				</div>
				<BuyColumn />
			</main>
		</>
	)
}

export default Product
