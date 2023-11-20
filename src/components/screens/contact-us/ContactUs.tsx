'use client'
import { FC, useState } from 'react'
import styles from './contactUs.module.scss'
import cn from 'clsx'
import { TUi } from '@/types/ui.type'
import { handlerFeedback } from '@/service/handlerFeedback'
import Loading from '@/app/loading'
import Alert from '@/components/ui/Alerts/Alert'
export type TFeedback = {
	id?: string
	fullName: string
	email: string
	phoneNumber: string
	city: string
	description: string
	createTime?: number
}
const defValue = {
	city: '',
	description: '',
	email: '',
	fullName: '',
	phoneNumber: ''
}

const ContactUs: FC = () => {
	const [userValue, setUserValue] = useState<TFeedback>(defValue)
	const [ui, setUi] = useState<TUi>({
		alertShow: false,
		event: 'success',
		loading: false,
		text: ''
	})
	return (
		<div className={styles.feedback__row}>
			{ui.loading && <Loading />}
			{ui.alertShow && (
				<Alert setState={setUi} text={ui.text} type={ui.event} />
			)}
			<div className={styles.feedback__column}>
				<form
					onSubmit={e => handlerFeedback(e, userValue, setUi, setUserValue)}
					className={styles.feedback__form}
				>
					<div className={styles.feedback__form_user_value}>
						<div className={styles.feedback__form_column}>
							<label htmlFor='userName'>Ismingiz</label>
							<input
								id='userName'
								onChange={e =>
									setUserValue(prev => ({ ...prev, fullName: e.target.value }))
								}
								value={userValue.fullName}
								type='text'
								name='name'
								placeholder='Хасанов Амир'
							/>
						</div>
						<div className={styles.feedback__form_column}>
							<label htmlFor='userEmail'>Electron pochta</label>
							<input
								id='userEmail'
								onChange={e =>
									setUserValue(prev => ({ ...prev, email: e.target.value }))
								}
								value={userValue.email}
								type='text'
								name='email'
								placeholder='example@gmail.com'
							/>
						</div>
						<div className={styles.feedback__form_column}>
							<label htmlFor='userNumber'>Telefon raqam</label>
							<input
								id='userNumber'
								onChange={e =>
									setUserValue(prev => ({
										...prev,
										phoneNumber: e.target.value
									}))
								}
								value={userValue.phoneNumber}
								type='tel'
								name=''
								placeholder='+998953641'
							/>
						</div>
						<div className={styles.feedback__form_column}>
							<label htmlFor='userState'>Sizning mintaqangiz</label>
							<input
								id='userState'
								onChange={e =>
									setUserValue(prev => ({ ...prev, city: e.target.value }))
								}
								value={userValue.city}
								type='text'
								name='state'
								placeholder='Самарканд'
							/>
						</div>
					</div>
					<div className={styles.feedback__form_description_file}>
						<label htmlFor='description'>
							Sizning fikringiz, taklifingiz yoki tanqidingiz
						</label>
						<textarea
							onChange={e =>
								setUserValue(prev => ({ ...prev, description: e.target.value }))
							}
							value={userValue.description}
							name='comment'
							id='description'
						></textarea>
					</div>
					<button
						type='submit'
						className={cn(styles.feedback__button, styles.feedback__submit)}
					>
						<span>Yuborish</span>
					</button>
					<button
						onClick={() => setUserValue(defValue)}
						type='reset'
						className={cn(styles.feedback__button, styles.feedback__reset)}
					>
						<span>Tozalash</span>
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
