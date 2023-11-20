'use client'
import { FC, useEffect } from 'react'
import styles from '../../news/news.module.scss'
import { useNewsMin } from '@/components/hooks/useAdminProduct'
import { getDate } from '@/util/getTime'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
import Link from 'next/link'
const NewsMin: FC = () => {
	const { products } = useNewsMin()
	useEffect(() => {
		animationScroll(styles)
	}, [products])
	return (
		<section className={styles.news} style={{ marginTop: '50px' }}>
			<div className={styles.news__container}>
				<h1>Oxirgi Yangiliklar</h1>
				<div className={styles.news__row}>
					{products.length > 0 &&
						products.reverse().map(news => (
							<div
								id='_anim-items'
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
										{news.link !== '' && (
											<li>
												<Link href={news.link}>O'tish</Link>
											</li>
										)}
										<li
											onClick={e =>
												document.body
													.querySelector(`#${news.id}`)
													?.classList.toggle(`${styles._open}`)
											}
										>
											O'qish
										</li>
									</ul>
								</div>
							</div>
						))}
				</div>
				<Link
					id='_anim-items'
					className={cn(styles.abutMin__link, styles._anim_none__hide)}
					href={'/news'}
				>
					Ko'proq yangiliklar
				</Link>
			</div>
		</section>
	)
}

export default NewsMin
