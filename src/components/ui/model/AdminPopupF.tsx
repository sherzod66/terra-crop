import { Dispatch, FC, SetStateAction } from 'react'
import styles from './DetailPopup.module.scss'
import cn from 'clsx'
import { IPopup } from '@/types/typePopup'

type TMap = {
	setIsShow: Dispatch<SetStateAction<IPopup>>
	isShow: IPopup
}
const AdminPopupF: FC<TMap> = ({ isShow, setIsShow }) => {
	return (
		<>
			{isShow.show && (
				<div
					onClick={e => {
						!(e.target as HTMLElement).closest('#model-content') &&
							setIsShow({ ...isShow, show: false })
					}}
					className={styles.model}
				>
					<div
						id='model-content'
						className={cn(styles.model__content, styles.bg)}
					>
						<div className={styles.detail}>
							User name
							<p>{isShow.dataF?.fullName}</p>
						</div>
						<div className={styles.detail}>
							User email
							<p>{isShow.dataF?.email}</p>
						</div>
						<div className={styles.detail}>
							User phone number
							<p>{isShow.dataF?.phoneNumber}</p>
						</div>
						<div className={styles.detail}>
							User city
							<p>{isShow.dataF?.city}</p>
						</div>
						<div className={styles.detail}>
							User description
							<p>{isShow.dataF?.description}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default AdminPopupF
