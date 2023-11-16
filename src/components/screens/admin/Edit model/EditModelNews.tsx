'use client'
import Loader from '@/components/ui/Loader/Loader'
import { EditDoc } from '@/service/EditDoc'
import { INews } from '@/types/news.type'
import styles from '../form model/fromModel.module.scss'
import { FC, useState } from 'react'

const EditModelNews: FC<{ news: INews }> = ({ news }) => {
	const [editD, setEditD] = useState<INews>(news)
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	return (
		<>
			{isInfo.loading && <Loader />}
			<form
				className={styles.from}
				onSubmit={e => EditDoc(e, 'news', `${editD.id}`, editD, setIsInfo)}
			>
				<label htmlFor='title'>editD title</label>
				<input
					type='text'
					id='title'
					onChange={e => setEditD(prev => ({ ...prev, title: e.target.value }))}
					value={editD.title}
				/>

				<label htmlFor='description'>editD Description</label>
				<textarea
					id='description'
					onChange={e =>
						setEditD(prev => ({ ...prev, description: e.target.value }))
					}
					value={editD.description}
				/>

				<label htmlFor='link'>editD Link</label>
				<input
					type='text'
					id='link'
					placeholder='/products/fertilizers'
					onChange={e => setEditD(prev => ({ ...prev, link: e.target.value }))}
					value={editD.link}
				/>

				<button type='submit'>Edit</button>
			</form>
		</>
	)
}

export default EditModelNews
