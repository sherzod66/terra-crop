'use client'
import { FC, useState } from 'react'
import styles from './search.module.scss'
import cn from 'clsx'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'
import { useSearch } from '../../hooks/useSearch'
import Loader from '../Loader/Loader'
const Search: FC = () => {
	const [focus, setFocus] = useState(false)
	const { info, searchData, setInputV } = useSearch()
	return (
		<div className={cn(styles.search, { [styles.focus]: focus })}>
			<input
				onFocus={() => setFocus(!focus)}
				onBlur={() => setFocus(!focus)}
				onChange={e => setInputV(e.target.value)}
				type='search'
				className={styles.searchTerm}
				placeholder='Search for plants, seeds and planters ...'
			/>
			<button className={styles.searchButton}>
				<BsSearch />
			</button>
			<ul id='f' className={cn(styles.searchList, { [styles._active]: focus })}>
				{info.isLoading && <Loader />}
				{info.notFound && <li>Product not found</li>}
				{searchData.length > 0 &&
					searchData.map(s => (
						<li key={s.id}>
							<Link href={`/product/${s.id}`}>{s.name}</Link>
						</li>
					))}
			</ul>
		</div>
	)
}

export default Search
