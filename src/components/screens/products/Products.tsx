'use client'
import { AllCollection } from '@/types/collection'
import { IProduct } from '@/types/product'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import styles from './products.module.scss'
import cn from 'clsx'
import { animationScroll } from '@/util/animation'
type TAllProduct = {
	data: IProduct[]
	id: string
}
const Products: FC<TAllProduct> = ({ data, id }) => {
	useEffect(() => animationScroll(styles), [])
	return (
		<div className={styles.product_detail}>
			<div className={styles.product_detail__container}>
				<h1>{AllCollection(id)}</h1>
				<div className={styles.product_detail__row}>
					{data.length > 0 ? (
						data.map(product => {
							const imageIndex = product.imageName.findIndex(name =>
								name.includes('main')
							)
							return (
								<Link
									id='_anim-items'
									href={`/product/${product.id}`}
									key={product.id}
									className={cn(
										styles.product_detail__column,
										styles._anim_none__hide
									)}
								>
									<div
										itemScope
										itemType={AllCollection(id)}
										className={styles.product_detail__item}
									>
										<div className={styles.product_detail__image}>
											<img
												itemProp='contentUrl'
												src={product.image[imageIndex]}
												alt={product.name}
											/>
										</div>
										<h3
											itemProp='name'
											className={styles.product_detail__title}
										>
											{product.name}
										</h3>
									</div>
								</Link>
							)
						})
					) : (
						<h2>Bu sahifada hech qanday mahsulot topilmadi</h2>
					)}
				</div>
			</div>
		</div>
	)
}

export default Products
