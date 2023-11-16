import Layout from '@/components/layout/Layout'
import styles from './contactUs.module.scss'
import { Metadata } from 'next'
import Link from 'next/link'
import { BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa6'
export const metadata: Metadata = {
	title: "Terra Crop | Biz bilan bog'lanish"
}

export default function Admin() {
	return (
		<Layout>
			<main className={styles.contactUs}>
				<div className={styles.contactUs__container}>
					<h1>Biz bilan bog'lanish</h1>
					<div className={styles.contactUs__body}>
						<ul className={styles.contactUs__contact}>
							<li>
								<a target='_blank' href='https://t.me/anata36'>
									<BsTelegram className={styles.footer__icons} />
								</a>
							</li>
							<li>Bizning telegram</li>
						</ul>
						<ul className={styles.contactUs__contact}>
							<li>
								<a target='_blank' href='https://wa.me/+998915229627'>
									<BsWhatsapp className={styles.footer__icons} />
								</a>
							</li>
							<li>WhatsApp</li>
						</ul>
						<ul className={styles.contactUs__contact}>
							<li>
								<a href='mailto:info@terracrop.uz'>
									<AiOutlineMail className={styles.footer__icons} />
								</a>
							</li>
							<li>Bizning pochtamiz</li>
						</ul>
						<ul className={styles.contactUs__contact}>
							<li>
								<a href='tel:+998915229627'>
									<FaPhone className={styles.footer__icons} />
								</a>
							</li>
							<li>
								<a href='tel:+998915229627'>+99891 522 96 27</a>
							</li>
						</ul>
						<ul className={styles.contactUs__contact}>
							<li>
								<a href='tel:+998953320088'>
									<FaPhone className={styles.footer__icons} />
								</a>
							</li>
							<li>
								<a href='tel:+998953320088'>+99895 332 00 88</a>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</Layout>
	)
}
