'use client'
import { EditDoc } from '@/service/EditDoc'
import { IProduct } from '@/types/product'
import { FC, useState } from 'react'
import styles from '../form model/fromModel.module.scss'
import { changeValue } from '@/util/changeTableValue'
import Loader from '@/components/ui/Loader/Loader'
import Alert from '@/components/ui/Alerts/Alert'

const EditModelP: FC<{ product: IProduct }> = ({ product }) => {
	const [products, setProducts] = useState<IProduct>(product)
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	const addTable = () => {
		setProducts(prev => ({
			...prev,
			table: [...prev.table, { culture: '', norm: '', timing: '' }]
		}))
	}
	return (
		<>
			{isInfo.loading && <Loader />}
			<form
				className={styles.from}
				onSubmit={e =>
					EditDoc(e, 'products', `${products.id}`, products, setIsInfo)
				}
			>
				<label htmlFor='title'>Product title</label>
				<input
					type='text'
					id='title'
					onChange={e =>
						setProducts(prev => ({ ...prev, name: e.target.value }))
					}
					value={products.name}
				/>

				<label htmlFor='Features'>Subtitle</label>
				<input
					name='Features'
					type='text'
					id='Features'
					onChange={e =>
						setProducts(prev => ({ ...prev, subTitle: e.target.value }))
					}
					value={products.subTitle}
				/>

				<label htmlFor='description'>Product Description</label>
				<textarea
					id='description'
					onChange={e =>
						setProducts(prev => ({ ...prev, description: e.target.value }))
					}
					value={products.description}
				/>

				<label htmlFor='select'>Select product type</label>
				<select
					onChange={e =>
						setProducts(prev => ({ ...prev, type: e.target.value }))
					}
					name='product-type'
					id='product-type'
				>
					<option value=''>👇</option>
					<option value='pesticides'>Fertilizers</option>
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
					{products.table.map((elem, index) => (
						<div key={index} className={styles.product__table}>
							{/* <div onClick={(e) => setProducts(prev => ({ ...prev, table: products.table.splice(index, 1) }))} className={styles.product__table__minus}>—</div> */}
							<div className={styles.product__table__body}>
								<textarea
									onChange={e =>
										changeValue(index, e, products, setProducts, 'culture')
									}
									defaultValue={elem.culture}
									id='culture'
								/>
								<textarea
									onChange={e =>
										changeValue(index, e, products, setProducts, 'norm')
									}
									defaultValue={elem.norm}
									id='norm'
								/>
								<textarea
									onChange={e =>
										changeValue(index, e, products, setProducts, 'timing')
									}
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

				<button type='submit'>Edit</button>
			</form>
		</>
	)
}

export default EditModelP
