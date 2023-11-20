import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { TFeedback } from '@/components/screens/contact-us/ContactUs'
import { TUi } from '@/types/ui.type'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Dispatch, FormEvent, SetStateAction } from 'react'

type THandler = (
	e: FormEvent<HTMLFormElement>,
	data: TFeedback,
	setUi: Dispatch<SetStateAction<TUi>>,
	setData: Dispatch<SetStateAction<TFeedback>>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const handlerFeedback: THandler = async (e, data, setUi, setData) => {
	e.preventDefault()
	setUi(prev => ({ ...prev, loading: true }))
	try {
		const writeDocument = await addDoc(collection(db, 'feedback'), {
			...data,
			createTime: Date.now()
		})
		setUi(prev => ({
			...prev,
			loading: false,
			alertShow: true,
			event: 'success',
			text: 'Muvaffaqiyatli yuborildi'
		}))
		setData({
			city: '',
			description: '',
			email: '',
			fullName: '',
			phoneNumber: ''
		})
	} catch (error: unknown) {
		console.log(error)
		setUi(prev => ({
			...prev,
			loading: false,
			alertShow: true,
			event: 'error',
			text: "Xato! Internet aloqangizni tekshiring yoki keyinroq qayta urinib ko'ring"
		}))
	}
}
