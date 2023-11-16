'use client'
import { FC, useEffect } from 'react'
import styles from '../../news/news.module.scss'
import Link from 'next/link'
import { useNewsMin } from '@/components/hooks/useAdminProduct'
import { getDate } from '@/util/getTime'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
const NewsMin: FC = () => {
	const { products } = useNewsMin()
	useEffect(() => {
		animationScroll(styles)
	}, [products])
	return (
		<section className={styles.news}>
			<div className={styles.news__container}>
				<h1>Oxirgi Yangiliklar</h1>
				<div className={styles.news__row}>
					{products.length > 0 &&
						products.reverse().map(news => (
							<Link
								id='_anim-items'
								href={'/news'}
								key={news.id}
								className={cn(styles.news__column, styles._anim_none__hide)}
							>
								<div className={styles.news__item}>
									<div className={styles.news__image}>
										<img src={news.image} alt={news.title} />
									</div>
									<div id={news.id} className={styles.news__contentBody}>
										<p>{news.title}</p>
										<p>{news.description}</p>
									</div>
									<ul className={styles.news__info}>
										<li>{getDate(news.createTime)}</li>
									</ul>
								</div>
							</Link>
						))}
				</div>
			</div>
		</section>
	)
}

export default NewsMin
