'use client'
import { FC, useState, ChangeEvent } from 'react'
import styles from './fromModel.module.scss'
import { handlerSubmitForm } from '@/service/handlerSubmitForm'
import { IProduct } from '@/types/product'
import { changeValue } from '@/util/changeTableValue'
import { isTrue } from '@/util/isTrue'
import { defaultValue } from './default/defaultValueProduct'
import Loader from '../../../ui/Loader/Loader'
import Alert from '../../../ui/Alerts/Alert'
import { TUi } from '@/types/ui.type'

const ProductForm: FC = () => {
	const [data, setData] = useState<IProduct>(defaultValue)
	const [ui, setUi] = useState<TUi>({
		loading: false,
		event: '',
		alertShow: false,
		text: ''
	})
	const [file, setFile] = useState<FileList | null>(null)
	const addTable = () => {
		setData(prev => ({
			...prev,
			table: [...prev.table, { culture: '', norm: '', timing: '' }]
		}))
	}
	return (
		<>
			{ui.loading && <Loader />}
			{ui.alertShow && (
				<Alert text={ui.text} type={ui.event} setState={setUi} />
			)}
			<form
				className={styles.from}
				onSubmit={e => {
					e.preventDefault()
					isTrue(data, file)
						? handlerSubmitForm(e, data, file as FileList, setUi, setData)
						: setUi({
								...ui,
								alertShow: true,
								text: 'Fill in all the fieldss',
								event: 'error'
						  })
				}}
			>
				<label htmlFor='title'>Product title</label>
				<input
					type='text'
					id='title'
					onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
					value={data.name}
				/>

				<label htmlFor='Features'>Subtitle</label>
				<input
					name='Features'
					type='text'
					id='Features'
					onChange={e =>
						setData(prev => ({ ...prev, subTitle: e.target.value }))
					}
					value={data.subTitle}
				/>

				<label htmlFor='description'>Product Description</label>
				<textarea
					id='description'
					onChange={e =>
						setData(prev => ({ ...prev, description: e.target.value }))
					}
					value={data.description}
				/>

				<label htmlFor='firstImage'>Product photo</label>
				<input
					onChange={event => setFile(event.target.files)}
					type='file'
					name='imgSelect'
					accept='.jpg, .png, .gif, .HEIC, .jpeg, .webp'
					multiple={true}
					id='firstImage'
				/>
				<label htmlFor='select'>Select product type</label>
				<select
					onChange={e => setData(prev => ({ ...prev, type: e.target.value }))}
					name='product-type'
					id='product-type'
				>
					<option value=''>👇</option>
					<option value='fertilizers'>Fertilizers</option>
					<option value='pesticides'>Pesticides</option>
					<option value='profert'>Profert</option>
					<option value='other-goods'>Other goods</option>
				</select>
				<div className={styles.table}>
					<ul className={styles.table__info}>
						<li>Culture</li>
						<li>Method of application and consumption rates</li>
						<li>Timing and frequency of treatments</li>
					</ul>
					{data.table.map((elem, index) => (
						<div key={index} className={styles.product__table}>
							{/* <div onClick={(e) => setData(prev => ({ ...prev, table: data.table.splice(index, 1) }))} className={styles.product__table__minus}>—</div> */}
							<div className={styles.product__table__body}>
								<textarea
									onChange={e =>
										changeValue(index, e, data, setData, 'culture')
									}
									defaultValue={elem.culture}
									id='culture'
								/>
								<textarea
									onChange={e => changeValue(index, e, data, setData, 'norm')}
									defaultValue={elem.norm}
									id='norm'
								/>
								<textarea
									onChange={e => changeValue(index, e, data, setData, 'timing')}
									defaultValue={elem.timing}
									id='timing'
								/>
							</div>
						</div>
					))}
					<div className={styles.add__table}>
						<p onClick={addTable}>+</p>
					</div>
				</div>

				<button type='submit'>Add</button>
			</form>
		</>
	)
}

export default ProductForm
