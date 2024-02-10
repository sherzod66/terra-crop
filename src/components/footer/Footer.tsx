'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp, BsInstagram, BsTelegram } from 'react-icons/bs'
import { listTitle } from '../header/headerList/listData'
import styles from './footer.module.scss'
import cn from 'clsx'
import { animationScroll } from '@/util/animation'
const Footer = () => {
	useEffect(() => {
		animationScroll(styles)
	}, [])
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__row}>
					<div
						id='_anim-items'
						className={cn(
							styles.footer__column,
							styles.logo_social,
							styles._anim_tems,
							styles._anim_none__hide
						)}
					>
						<div className={styles.footer__logo}>
							<img src='/logo.png' alt='Logo' />
						</div>
						<ul className={styles.footer__social_list}>
							<li>
								<a href='mailto:info@terracrop.uz'>
									<AiOutlineMail className={styles.footer__icons} />
								</a>
							</li>
							<li>
								<a
									target='_blank'
									href='https://www.instagram.com/ariashimi_sam/?igshid=NzZhOTFlYzFmZQ%3D%3D'
								>
									<BsInstagram className={styles.footer__icons} />
								</a>
							</li>
							<li>
								<a target='_blank' href='https://wa.me/+998915229627'>
									<BsWhatsapp className={styles.footer__icons} />
								</a>
							</li>
							<li>
								<a target='_blank' href='https://t.me/anata36'>
									<BsTelegram className={styles.footer__icons} />
								</a>
							</li>
						</ul>
					</div>
					<div
						id='_anim-items'
						className={cn(
							styles.footer__column,
							styles.logo_social,
							styles._anim_tems,
							styles._anim_none__hide
						)}
					>
						<div className={styles.footer__list_title}>
							Biz bilan bog'lanish
						</div>
						<ul className={styles.footerList}>
							{/* <li>
								<Link href={'/contact-us/sales-uzb'}>''</Link>
							</li> */}
							<li>
								<a href='tel:+998915229627'>Telefon raqam: +99891 522 96 27</a>
							</li>
							<li>
								<a href='tel:+998953320088'>Telefon raqam: +99895 332 00 88</a>
							</li>
							<li>
								<a href='mailto:info@terracrop.uz'>info@terracrop.uz</a>
							</li>
						</ul>
					</div>
					<div
						id='_anim-items'
						className={cn(
							styles.footer__column,
							styles.logo_social,
							styles._anim_tems,
							styles._anim_none__hide
						)}
					>
						<div className={styles.footer__list_title}>Mahsulotlar</div>
						<ul className={styles.footerList}>
							{listTitle.map(elem => (
								<li key={elem.link}>
									<Link href={elem.link}>{elem.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
