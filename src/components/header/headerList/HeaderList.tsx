import { FC } from 'react'
import { listTitle } from './listData'
import Link from 'next/link'
import styles from './headerList.module.scss'
import cn from 'clsx'
import { usePathname } from 'next/navigation'
type TProps = {
	active: boolean
}
const HeaderList: FC<TProps> = ({ active }) => {
	const pathname = usePathname()
	return (
		<ul className={cn(styles.header__list, { [styles.active]: active })}>
			{listTitle.map(title => (
				<li key={title.link}>
					<Link
						className={cn(styles.headerLink, {
							[styles.thisPage]: pathname.includes(title.link)
						})}
						href={title.link}
					>
						{title.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default HeaderList
