'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './model.module.scss'
import { IProduct } from '@/types/product'
import { ISellers } from '@/types/sellers'
import { INews } from '@/types/news.type'

type TEditPopup = {
	setEdit: Dispatch<
		SetStateAction<{
			show: boolean
			dataP?: IProduct
			dataS?: ISellers
		}>
	>
	children:
		| JSX.Element[]
		| JSX.Element
		| React.ReactElement
		| React.ReactElement[]
		| string
	dataP?: IProduct
	dataS?: ISellers
	dataN?: INews
}
const EditPopup: FC<TEditPopup> = ({
	setEdit,
	children,
	dataP,
	dataS,
	dataN
}) => {
	return (
		<div
			onClick={e =>
				!(e.target as HTMLElement).closest('#model-content') &&
				setEdit(prev => ({ ...prev, show: false }))
			}
			className={styles.model}
		>
			<div id='model-content' className={styles.model__content}>
				{dataP && children}
				{dataS && children}
				{dataN && children}
			</div>
		</div>
	)
}

export default EditPopup
