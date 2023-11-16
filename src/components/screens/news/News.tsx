'use client'
import Layout from '@/components/layout/Layout'
import { FC, useEffect, useMemo } from 'react'
import styles from './news.module.scss'
import { useAdminNews } from '@/components/hooks/useAdminProduct'
import { getDate, getTime } from '@/util/getTime'
import Link from 'next/link'
import { animationScroll } from '@/util/animation'
import cn from 'clsx'
const News: FC = () => {
	const { id, isInfo, products, setIsInfo } = useAdminNews()
	const filterData = useMemo(
		() => products.sort((a, b) => a.createTime - b.createTime),
		[products]
	)
	useEffect(() => {
		animationScroll(styles)
	}, [products])
	return (
		<Layout>
			<section className={styles.news}>
				<div className={styles.news__container}>
					<h1>Yangiliklar</h1>
					<div className={styles.news__row}>
						{products.length > 0 &&
							filterData.reverse().map(news => (
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
				</div>
			</section>
		</Layout>
	)
}

export default News
