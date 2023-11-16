import { Dispatch, FC, SetStateAction } from 'react'
import styles from './DetailPopup.module.scss'
import cn from 'clsx'
import { IPopup } from '@/types/typePopup'

type TMap = {
	setIsShow: Dispatch<SetStateAction<IPopup>>
	isShow: IPopup
}
const AdminPopupD: FC<TMap> = ({ isShow, setIsShow }) => {
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
							Product name
							<p>{isShow.dataP?.name}</p>
						</div>
						<div className={styles.detail}>
							Product subtitle
							<p>{isShow.dataP?.subTitle}</p>
						</div>
						<div className={styles.detail}>
							Product description
							<p>{isShow.dataP?.description}</p>
						</div>
						<div className={styles.detail}>
							Product description
							<p>{isShow.dataP?.type}</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AdminPopupD
