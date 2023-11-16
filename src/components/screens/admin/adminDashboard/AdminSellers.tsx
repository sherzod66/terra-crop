'use client'
import { useAdminSeller } from '@/components/hooks/useAdminProduct'
import { FC, useState } from 'react'
import { dashboardBarList } from './dashboardBarList'
import Loader from '@/components/ui/Loader/Loader'
import styles from './adminDash.module.scss'
import { getDate, getTime } from '@/util/getTime'
import cn from 'clsx'
import { IPopup } from '@/types/typePopup'
import AdminPopupS from '@/components/ui/model/AdminPopupS'
import { DeleteDoc } from '@/service/DeleteService'
import EditModelS from '../Edit model/EditModelS'
import EditPopup from '@/components/ui/model/EditPopup'
import { ISellers } from '@/types/sellers'

const AdminSellers: FC = () => {
	const { id, isInfo, products, setIsInfo } = useAdminSeller()
	const [isShow, setIsShow] = useState<IPopup>({ show: false })
	const [edit, setEdit] = useState<{ show: boolean; dataS?: ISellers }>({
		show: false
	})
	const getTitle = dashboardBarList.find(elemId =>
		elemId.link.includes(String(id))
	)
	return (
		<>
			{isInfo.loading && <Loader />}
			{isInfo.notFound && <h1>{getTitle?.title} Not found</h1>}
			{isShow.show && <AdminPopupS isShow={isShow} setIsShow={setIsShow} />}
			{edit.show && (
				<EditPopup
					setEdit={setEdit}
					children={<EditModelS product={edit.dataS as ISellers} />}
					dataS={edit.dataS}
				/>
			)}
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
								setIsShow({ ...isShow, show: !isShow.show, dataS: product })
							}
						>
							Detail
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() =>
								setEdit(prev => ({ ...prev, show: !edit.show, dataS: product }))
							}
							className={cn(styles.row_button, styles.edit)}
						>
							Edit
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() => DeleteDoc(product, setIsInfo)}
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

export default AdminSellers
