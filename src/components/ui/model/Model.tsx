'use client'
import { FC, useState } from 'react'
import styles from './model.module.scss'
import { useParams, usePathname } from 'next/navigation'
import { dashboardBarList } from '@/components/screens/admin/adminDashboard/dashboardBarList'
import { IoMdClose } from 'react-icons/io'
const Model: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const { id } = useParams()
	const Detail = dashboardBarList.findIndex(item =>
		item.link.includes(String(id))
	)
	const pathName = usePathname()
	return (
		<>
			{!pathName.includes('feedback') && (
				<button
					onClick={() => setIsShow(!isShow)}
					className={styles.button}
					type='button'
				>
					Add
				</button>
			)}
			{isShow && (
				<div className={styles.model}>
					<button className={styles.close} onClick={() => setIsShow(!isShow)}>
						<IoMdClose />
					</button>
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
