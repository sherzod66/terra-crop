'use client'
import { FC, useEffect } from 'react'
import styles from './choiceProducts.module.scss'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
const ChoiceProducts: FC = () => {
	useEffect(() => animationScroll(styles), [])
	return (
		<Layout>
			<main className={styles.choiceP}>
				<div className={styles.choiceP__container}>
					<h1>Sizni qiziqtirgan toifani tanlang</h1>
					<div className={styles.choiceP__row}>
						<Link
							href={'/products/fertilizers'}
							className={cn(styles.choiceP__column, styles._anim_none__hide)}
							id='_anim-items'
						>
							<div className={styles.choiceP__item}>
								<div className={styles.choiceP__image}>
									<img
										src='https://www.ariashimi.ir/templates/yootheme/cache/kod-345b3ccf.jpeg'
										alt='fertilizer'
									/>
								</div>
								<div className={styles.choiceP__body}>
									<h3 className={styles.choice__title}>{'fertilizers'}</h3>
									<h4 className={styles.choice__sub_title}>
										{'fertilizersText'}
									</h4>
								</div>
							</div>
						</Link>
						<Link
							id='_anim-items'
							href={'/products/pesticides'}
							className={cn(styles.choiceP__column, styles._anim_none__hide)}
						>
							<div className={styles.choiceP__item}>
								<div className={styles.choiceP__image}>
									<img
										src='https://www.ariashimi.ir/templates/yootheme/cache/somom-49870594.jpeg'
										alt='poisons'
									/>
								</div>
								<div className={styles.choiceP__body}>
									<h3 className={styles.choice__title}>{'pesticides'}</h3>
									<h4 className={styles.choice__sub_title}>
										{'fertilizersText'}
									</h4>
								</div>
							</div>
						</Link>
						<Link
							id='_anim-items'
							href={'/products/profert'}
							className={cn(styles.choiceP__column, styles._anim_none__hide)}
						>
							<div className={styles.choiceP__item}>
								<div className={styles.choiceP__image}>
									<img
										src='https://growgreenfertiliser.com/wp-content/uploads/2019/11/Profert.jpg'
										alt='poisons'
									/>
								</div>
								<div className={styles.choiceP__body}>
									<h3 className={styles.choice__title}>Profert</h3>
									<h4 className={styles.choice__sub_title}>
										{'fertilizersText'}
									</h4>
								</div>
							</div>
						</Link>
						<Link
							id='_anim-items'
							href={'/products/other-goods'}
							className={cn(styles.choiceP__column, styles._anim_none__hide)}
						>
							<div className={styles.choiceP__item}>
								<div className={styles.choiceP__image}>
									<img
										src='https://www.ariashimi.ir/templates/yootheme/cache/somom-49870594.jpeg'
										alt='poisons'
									/>
								</div>
								<div className={styles.choiceP__body}>
									<h3 className={styles.choice__title}>Other-goods</h3>
									<h4 className={styles.choice__sub_title}>
										{'fertilizersText'}
									</h4>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</Layout>
	)
}

export default ChoiceProducts
