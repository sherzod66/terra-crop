'use client'
import { useAdminFeedback } from '@/components/hooks/useGetFeedback'
import { FC, useState } from 'react'
import { TFeedback } from '../../contact-us/ContactUs'
import styles from './adminDash.module.scss'
import { dashboardBarList } from './dashboardBarList'
import Loader from '@/components/ui/Loader/Loader'
import AdminPopupS from '@/components/ui/model/AdminPopupS'
import { IPopup } from '@/types/typePopup'
import { getDate, getTime } from '@/util/getTime'
import cn from 'clsx'
import { DeleteFeedback } from '@/service/DeleteService'
import AdminPopupF from '@/components/ui/model/AdminPopupF'

const AdminFeedback: FC = () => {
	const { id, isInfo, products, setIsInfo } = useAdminFeedback()
	const [isShow, setIsShow] = useState<IPopup>({ show: false })
	const getTitle = dashboardBarList.find(elemId =>
		elemId.link.includes(String(id))
	)
	return (
		<>
			{isInfo.loading && <Loader />}
			{isInfo.notFound && <h1>{getTitle?.title} Not found</h1>}
			{isShow.show && <AdminPopupF isShow={isShow} setIsShow={setIsShow} />}
			{products.map(product => (
				<div key={product.id} className={styles.row}>
					<div className={styles.row__image_name}>
						<p>
							<strong>{product.fullName}</strong>
						</p>
					</div>
					<div className={styles.row__date}>
						<p>{getDate(product.createTime)}</p>
						<p>{getTime(product.createTime)}</p>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							className={cn(styles.row_button, styles.detail)}
							onClick={() =>
								setIsShow({ ...isShow, show: !isShow.show, dataF: product })
							}
						>
							Detail
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() => DeleteFeedback(product, setIsInfo)}
							className={cn(styles.row_button, styles.delete)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</>
	)
}

export default AdminFeedback
