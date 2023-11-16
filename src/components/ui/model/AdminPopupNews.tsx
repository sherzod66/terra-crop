import { IPopup } from '@/types/typePopup'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './DetailPopup.module.scss'
import cn from 'clsx'
type TMap = {
	setIsShow: Dispatch<SetStateAction<IPopup>>
	isShow: IPopup
}
const AdminPopupNews: FC<TMap> = ({ isShow, setIsShow }) => {
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
							<p>{isShow.dataN?.title}</p>
						</div>
						<div className={styles.detail}>
							Seller phone number
							<p>{isShow.dataN?.description}</p>
						</div>
						<div className={styles.detail}>
							Seller address
							<p>{isShow.dataN?.link}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AdminPopupNews
