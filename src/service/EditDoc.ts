import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { TCollection } from '@/types/collection'
import { IProduct } from '@/types/product'
import { ISellers } from '@/types/sellers'
import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { Dispatch, FormEvent, SetStateAction } from 'react'

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)

type TEditDoc = (
	e: FormEvent<HTMLFormElement>,
	collection: TCollection,
	id: string,
	data: object,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void
export const EditDoc: TEditDoc = async (e, collection, id, data, setIsInfo) => {
	e.preventDefault()
	setIsInfo(prev => ({ ...prev, loading: true, notFound: false }))
	try {
		await setDoc(doc(db, collection, id), data)
		setIsInfo(prev => ({ ...prev, loading: false, notFound: false }))
		location.reload()
	} catch (e) {
		alert('Error! Something went wrong')
		setIsInfo(prev => ({ ...prev, loading: false, notFound: true }))
	}
}
