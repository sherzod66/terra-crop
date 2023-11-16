'use client'
import { FC, useState } from 'react'
import styles from './model.module.scss'
import { useParams } from 'next/navigation'
import { dashboardBarList } from '@/components/screens/admin/adminDashboard/dashboardBarList'
const Model: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const { id } = useParams()
	const Detail = dashboardBarList.findIndex(item =>
		item.link.includes(String(id))
	)
	return (
		<>
			<button
				onClick={() => setIsShow(!isShow)}
				className={styles.button}
				type='button'
			>
				Add
			</button>
			{isShow && (
				<div
					onClick={e =>
						!(e.target as HTMLElement).closest('#model-content') &&
						setIsShow(!isShow)
					}
					className={styles.model}
				>
					<div id='model-content' className={styles.model__content}>
						{dashboardBarList.map((item, index) =>
							index === Detail ? <item.ModelDetail key={index} /> : ''
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Model
