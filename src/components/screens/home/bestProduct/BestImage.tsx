'use client'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import styles from './bestProduct.module.scss'
import cn from 'clsx'
import { animationScroll } from '@/util/animation'
import { useAdminProduct } from '../../../hooks/useAdminProduct'
import { getImageChangeId } from '@/util/getImageId'
import { IProduct } from '@/types/product'
const BestImage: FC<{ response: IProduct[] }> = ({ response }) => {
	const [products, setProducts] = useState<IProduct[]>(response)
	const [num, setNum] = useState<number>(0)
	useEffect(() => {
		animationScroll(styles)
	}, [products])
	return (
		<>
			{products.length > 0 ? (
				products.slice(0, 4).map(product => {
					const imageIndex = product.imageName.findIndex(name =>
						name.includes('main')
					)

					return (
						<Link
							key={product.id}
							href={`product/${product.id}`}
							id='_anim-items'
							className={cn(
								styles.bestProduct__column,
								styles._anim_none__hide
							)}
						>
							<div className={styles.bestProduct__image}>
								<div className={styles.bestProduct__front}>
									<img
										src={`${product.image[imageIndex]}`}
										alt={product.name}
									/>
								</div>
								<div className={styles.bestProduct__back}>
									<img
										src={`${
											product.image[getImageChangeId(product.image, imageIndex)]
										}`}
										alt={product.name}
									/>
								</div>
							</div>
							<p>{product.name}</p>
						</Link>
					)
				})
			) : (
				<>
					<Link
						href={`/`}
						id='_anim-items'
						className={cn(
							styles.bestProduct__column,
							styles._anim_none__hide,
							styles._l
						)}
					>
						<div className={styles.bestProduct__image}>
							<div className={cn(styles.bestProduct__front, styles._l)}>
								<p></p>
							</div>
							<div className={cn(styles.bestProduct__back, styles._l)}>
								<p></p>
							</div>
						</div>
						<p className={styles._l}></p>
					</Link>
					<Link
						href={`/`}
						id='_anim-items'
						className={cn(
							styles.bestProduct__column,
							styles._anim_none__hide,
							styles._l
						)}
					>
						<div className={styles.bestProduct__image}>
							<div className={cn(styles.bestProduct__front, styles._l)}>
								<p></p>
							</div>
							<div className={cn(styles.bestProduct__back, styles._l)}>
								<p></p>
							</div>
						</div>
						<p className={styles._l}></p>
					</Link>
					<Link
						href={`/`}
						id='_anim-items'
						className={cn(
							styles.bestProduct__column,
							styles._anim_none__hide,
							styles._l
						)}
					>
						<div className={styles.bestProduct__image}>
							<div className={cn(styles.bestProduct__front, styles._l)}>
								<p></p>
							</div>
							<div className={cn(styles.bestProduct__back, styles._l)}>
								<p></p>
							</div>
						</div>
						<p className={styles._l}></p>
					</Link>
					<Link
						href={`/`}
						id='_anim-items'
						className={cn(
							styles.bestProduct__column,
							styles._anim_none__hide,
							styles._l
						)}
					>
						<div className={styles.bestProduct__image}>
							<div className={cn(styles.bestProduct__front, styles._l)}>
								<p></p>
							</div>
							<div className={cn(styles.bestProduct__back, styles._l)}>
								<p></p>
							</div>
						</div>
						<p className={styles._l}></p>
					</Link>
				</>
			)}
		</>
	)
}

export default BestImage
