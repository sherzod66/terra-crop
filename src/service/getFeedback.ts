import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { TFeedback } from '@/components/screens/contact-us/ContactUs'
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'
type TRequiredFeedback = Required<TFeedback>
type TGetFeedback = (
	setState: Dispatch<SetStateAction<TRequiredFeedback[]>>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const getFeedback: TGetFeedback = async (setState, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	try {
		const feedback = await getDocs(collection(db, 'feedback'))
		if (!feedback.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			feedback.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<TRequiredFeedback, 'id'>) }
				])
			})
		} else {
			setIsInfo(prev => ({ ...prev, loading: false, notFound: true }))
		}
	} catch (e) {
		setIsInfo(prev => ({ ...prev, loading: false, notFound: true }))
		console.log(e)
	}
}
