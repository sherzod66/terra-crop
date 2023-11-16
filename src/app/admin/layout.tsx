'use client'
import { dashboardBarList } from '@/components/screens/admin/adminDashboard/dashboardBarList'
import styles from './adminLayout.module.scss'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useContext } from 'react'
import { AuthContext } from '@/components/context/Context'
import AdminAuth from '@/components/screens/admin/adminAuth/AdminAuth'
import { SignOut } from '@/util/logOut'
export default function AdminLayout({
	children
}: {
	children: React.ReactNode
}) {
	const { id } = useParams()
	const { isAuth } = useContext(AuthContext)
	return (
		<>
			{isAuth ? (
				<main className={styles.dashboard}>
					<section className={styles.dashboard__bar}>
						<div className={styles.dashboard__bar_body}>
							<div className={styles.dashboard__bar_logo}>
								<img src='/favicon.svg' alt='Logo' />
							</div>
							<ul className={styles.dashboard__bar_list}>
								{dashboardBarList.map(element => (
									<li
										className={
											element.link.includes(String(id)) ? styles.active : ''
										}
										key={element.link}
									>
										{<element.icons className='' />}
										<Link
											className={styles.dashboard__bar_link}
											href={element.link}
										>
											{element.title}
										</Link>
									</li>
								))}
							</ul>
							<button
								type='button'
								onClick={() => SignOut()}
								className={styles.dashboard__bar_button}
							>
								Log out
							</button>
						</div>
					</section>
					<section className={styles.dashboard__content}>{children}</section>
				</main>
			) : (
				<AdminAuth />
			)}
		</>
	)
}
