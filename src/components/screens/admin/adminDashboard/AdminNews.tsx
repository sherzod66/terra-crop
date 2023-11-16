'use client'
import { FC, useState } from 'react'
import { dashboardBarList } from './dashboardBarList'
import { useAdminNews } from '@/components/hooks/useAdminProduct'
import styles from './adminDash.module.scss'
import Loader from '@/components/ui/Loader/Loader'
import cn from 'clsx'
import { INews } from '@/types/news.type'
import { getDate, getTime } from '@/util/getTime'
import { IPopup } from '@/types/typePopup'
import EditPopup from '@/components/ui/model/EditPopup'
import AdminPopupNews from '@/components/ui/model/AdminPopupNews'
import EditModelNews from '../Edit model/EditModelNews'
import { DeleteNews } from '@/service/DeleteService'

const AdminNews: FC = () => {
	const { id, isInfo, products, setIsInfo } = useAdminNews()
	const [isShow, setIsShow] = useState<IPopup>({ show: false })
	const [edit, setEdit] = useState<{ show: boolean; dataN?: INews }>({
		show: false
	})
	const getTitle = dashboardBarList.find(elemId =>
		elemId.link.includes(String(id))
	)
	return (
		<>
			{isInfo.loading && <Loader />}
			{isInfo.notFound && <h1>{getTitle?.title} Not found</h1>}
			{isShow.show && <AdminPopupNews isShow={isShow} setIsShow={setIsShow} />}
			{edit.show && (
				<EditPopup
					setEdit={setEdit}
					children={<EditModelNews news={edit.dataN as INews} />}
					dataN={edit.dataN}
				/>
			)}
			{products.map(product => (
				<div key={product.id} className={styles.row}>
					<div className={styles.row__image_name}>
						<div className={styles.row__image}>
							<img draggable={false} src={product.image} alt='' />
						</div>
						<p>{product.title}</p>
					</div>
					<div className={styles.row__date}>
						<p>{getDate(product.createTime)}</p>
						<p>{getTime(product.createTime)}</p>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() =>
								setIsShow({ ...isShow, show: !isShow.show, dataN: product })
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
									dataN: product
								}))
							}
							className={cn(styles.row_button, styles.edit)}
						>
							Edit
						</button>
					</div>
					<div className={styles.row_buttonWrapper}>
						<button
							onClick={() => DeleteNews(product, setIsInfo)}
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

export default AdminNews
