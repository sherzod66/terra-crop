import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { defaultValueSeller } from '@/components/screens/admin/form model/default/defaultValueSeller'
import { ISellers } from '@/types/sellers'
import { TUi } from '@/types/ui.type'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import type { Dispatch, SetStateAction } from 'react'
type THandler = (
	data: ISellers,
	setUi: Dispatch<SetStateAction<TUi>>,
	setData: Dispatch<SetStateAction<ISellers>>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const handlerSubmitSellers: THandler = async (data, setUi, setData) => {
	setUi(prev => ({ ...prev, loading: true }))
	try {
		const writeDocument = await addDoc(collection(db, 'sellers'), {
			...data,
			createTime: Date.now()
		})
		setUi(prev => ({
			...prev,
			loading: false,
			alertShow: true,
			event: 'success',
			text: 'Data uploaded successfully'
		}))
		setData(defaultValueSeller)
	} catch (error: unknown) {
		console.log(error)
		setUi(prev => ({
			...prev,
			loading: false,
			alertShow: true,
			event: 'error',
			text: 'Something went wrong'
		}))
	}
}
