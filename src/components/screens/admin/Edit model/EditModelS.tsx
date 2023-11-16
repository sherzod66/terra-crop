'use client'
import { EditDoc } from '@/service/EditDoc'
import { FC, useState } from 'react'
import styles from '../form model/fromModel.module.scss'
import Loader from '@/components/ui/Loader/Loader'
import { ISellers } from '@/types/sellers'
import { Regions } from '../form model/region data/regionData'

const EditModelS: FC<{ product: ISellers }> = ({ product }) => {
	const [products, setProducts] = useState<ISellers>(product)
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	return (
		<>
			{isInfo.loading && <Loader />}
			<form
				className={styles.from}
				onSubmit={e =>
					EditDoc(e, 'sellers', `${products.id}`, products, setIsInfo)
				}
			>
				<label htmlFor='name'>products first name and last name</label>
				<input
					type='text'
					id='name'
					name='name'
					onChange={e =>
						setProducts(prev => ({ ...prev, fullName: e.target.value }))
					}
					value={products.fullName}
				/>

				<label htmlFor='phone'>Phone number</label>
				<input
					placeholder='+998915368117'
					type='tel'
					id='phone'
					name='phone'
					onChange={e =>
						setProducts(prev => ({ ...prev, phoneNumber: e.target.value }))
					}
					value={products.phoneNumber}
				/>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					id='address'
					name='address'
					placeholder='Samarkand, Registon kuchasi'
					onChange={e =>
						setProducts(prev => ({ ...prev, address: e.target.value }))
					}
					value={products.address}
				/>
				<label htmlFor='location'>Location</label>
				<input
					type='text'
					placeholder='39.653222, 66.973243'
					id='location'
					onChange={e =>
						setProducts(prev => ({ ...prev, location: e.target.value }))
					}
					value={products.location}
				/>
				<label htmlFor='region'>Region</label>
				<select
					onChange={e =>
						setProducts(prev => ({ ...prev, region: e.target.value }))
					}
					name='region'
					id='region'
				>
					<option value=''>👇</option>
					{Regions.map(region => (
						<option key={region.id} value={region.region}>
							{region.region}
						</option>
					))}
				</select>

				<label htmlFor='store'>Store name</label>
				<input
					type='text'
					id='store'
					placeholder='Example name'
					onChange={e =>
						setProducts(prev => ({ ...prev, storeName: e.target.value }))
					}
					value={products.storeName}
				/>
				<button type='submit'>Edit</button>
			</form>
		</>
	)
}

export default EditModelS
