'use client'
import { FC, useEffect, useState } from 'react'
import styles from './adminDash.module.scss'
import { dashboardBarList } from './dashboardBarList'
import { useAdminProduct } from '../../../hooks/useAdminProduct'
import Loader from '@/components/ui/Loader/Loader'
import cn from 'clsx'
import { getDate, getTime } from '@/util/getTime'
import AdminPopupD from '@/components/ui/model/AdminPopupD'
import { IPopup } from '@/types/typePopup'
import { DeleteServiceProduct } from '@/service/DeleteService'
import EditPopup from '@/components/ui/model/EditPopup'
import { IProduct } from '@/types/product'
import EditModelP from '../Edit model/EditModelP'

const AdminProduct: FC = () => {
	const { id, isInfo, products, setIsInfo } = useAdminProduct()
	const [isShow, setIsShow] = useState<IPopup>({ show: false })
	const [edit, setEdit] = useState<{ show: boolean; dataP?: IProduct }>({
		show: false
	})
	const getTitle = dashboardBarList.find(elemId =>
		elemId.link.includes(String(id))
	)

	return (
		<>
			{isInfo.loading && <Loader />}
			{isInfo.notFound && <h1>{getTitle?.title} Not found</h1>}
			{isShow.show && <AdminPopupD isShow={isShow} setIsShow={setIsShow} />}
			{edit.show && (
				<EditPopup
					setEdit={setEdit}
					children={<EditModelP product={edit.dataP as IProduct} />}
					dataP={edit.dataP}
				/>
			)}
			{products.map(product => (
				<div key={product.id} className={styles.row}>
					<div className={styles.row__image_name}>
						<div className={styles.row__image}>
							<img draggable={false} src={product.image[0]} alt='' />
						</div>
						<p>{product.name}</p>
					</div>
					<div className={styles.row__date}>
						<p>{getDate(product.createTime)}</p>
						<p>{getTime(product.createTime)}</p>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() =>
								setIsShow({ ...isShow, show: !isShow.show, dataP: product })
							}
							className={cn(styles.row_button, styles.detail)}
						>
							Detail
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() =>
								setEdit(prev => ({
									...prev,
									show: !edit.show,
									dataP: product
								}))
							}
							className={cn(styles.row_button, styles.edit)}
						>
							Edit
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() => DeleteServiceProduct(product, setIsInfo)}
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

export default AdminProduct
