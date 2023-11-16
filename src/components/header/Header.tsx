'use client'
import { FC, useEffect, useState } from 'react'
import Logo from '../ui/logo/Logo'
import Search from '../ui/search/Search'
import styles from './header.module.scss'
import HeaderList from './headerList/HeaderList'
import cn from 'clsx'
import { headerUtil } from '@/util/headerUtil'

const Header: FC = () => {
	const [burger, setBurger] = useState(false)
	useEffect(() => headerUtil(styles), [])
	return (
		<header id='header' className={styles.header}>
			<div
				onClick={() => setBurger(!burger)}
				className={cn(styles.popup, { [styles.active]: burger })}
			></div>
			<div className={styles.header__container}>
				<nav className={styles.header__row}>
					<div className={styles.header__column}>
						<Logo />
						<HeaderList active={burger} />
					</div>
					<div className={styles.header__column}>
						<Search />
					</div>
				</nav>
				<button
					onClick={() => setBurger(!burger)}
					aria-label='Open menu'
					className={cn(styles.burger, { [styles.active]: burger })}
				>
					<span></span>
				</button>
			</div>
		</header>
	)
}

export default Header
