'use client'
import { useAddSeller } from '@/components/hooks/useAddSeller'
import Alert from '@/components/ui/Alerts/Alert'
import Loader from '@/components/ui/Loader/Loader'
import { FC } from 'react'
import styles from './fromModel.module.scss'
import { Regions } from './region data/regionData'
import { handlerSubmitSellers } from '@/service/handlerSubmitSellers'
import { isTrueSeller } from '@/util/isTrue'
const SellersForm: FC = () => {
	const { seller, setSeller, ui, setUi } = useAddSeller()

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
					isTrueSeller(seller)
						? handlerSubmitSellers(seller, setUi, setSeller)
						: setUi({
								...ui,
								alertShow: true,
								text: 'Fill in all the fieldss',
								event: 'error'
						  })
				}}
			>
				<label htmlFor='name'>Seller first name and last name</label>
				<input
					type='text'
					id='name'
					name='name'
					onChange={e =>
						setSeller(prev => ({ ...prev, fullName: e.target.value }))
					}
					value={seller.fullName}
				/>

				<label htmlFor='phone'>Phone number</label>
				<input
					placeholder='+998915368117'
					type='tel'
					id='phone'
					name='phone'
					onChange={e =>
						setSeller(prev => ({ ...prev, phoneNumber: e.target.value }))
					}
					value={seller.phoneNumber}
				/>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					id='address'
					name='address'
					placeholder='Samarkand, Registon kuchasi'
					onChange={e =>
						setSeller(prev => ({ ...prev, address: e.target.value }))
					}
					value={seller.address}
				/>
				<label htmlFor='location'>Location</label>
				<input
					type='text'
					placeholder='39.653222, 66.973243'
					id='location'
					onChange={e =>
						setSeller(prev => ({ ...prev, location: e.target.value }))
					}
					value={seller.location}
				/>
				<label htmlFor='region'>Region</label>
				<select
					onChange={e =>
						setSeller(prev => ({ ...prev, region: e.target.value }))
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
						setSeller(prev => ({ ...prev, storeName: e.target.value }))
					}
					value={seller.storeName}
				/>
				<button type='submit'>Add</button>
			</form>
		</>
	)
}

export default SellersForm
