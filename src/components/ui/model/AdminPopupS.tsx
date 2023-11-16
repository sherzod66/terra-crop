import { Dispatch, FC, SetStateAction } from 'react'
import styles from './DetailPopup.module.scss'
import cn from 'clsx'
import { IPopup } from '@/types/typePopup'

type TMap = {
	setIsShow: Dispatch<SetStateAction<IPopup>>
	isShow: IPopup
}
const AdminPopupS: FC<TMap> = ({ isShow, setIsShow }) => {
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
							Seller name
							<p>{isShow.dataS?.fullName}</p>
						</div>
						<div className={styles.detail}>
							Seller phone number
							<p>{isShow.dataS?.phoneNumber}</p>
						</div>
						<div className={styles.detail}>
							Seller address
							<p>{isShow.dataS?.address}</p>
						</div>
						<div className={styles.detail}>
							Seller region
							<p>{isShow.dataS?.region}</p>
						</div>
						<div className={styles.detail}>
							Seller store name
							<p>{isShow.dataS?.storeName}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AdminPopupS
