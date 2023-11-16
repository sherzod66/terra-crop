import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { IProduct } from '@/types/product'
import { initializeApp } from 'firebase/app'
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where
} from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'

interface IRequiredCar extends Required<IProduct> {}
type TSearchProduct = (
	name: string,
	setSearchData: Dispatch<SetStateAction<IRequiredCar[]>>,
	setInfo: Dispatch<
		SetStateAction<{
			isLoading: boolean
			notFound: boolean
		}>
	>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)

export const searchProduct: TSearchProduct = async (
	name,
	setSearchData,
	setInfo
) => {
	setSearchData([])
	setInfo(prev => ({ ...prev, isLoading: true, notFound: false }))
	const q = query(
		collection(db, 'products'),
		where('name', '==', name.toLowerCase())
	)
	try {
		const querySnapshot = await getDocs(q)
		if (!querySnapshot.empty) {
			setInfo(prev => ({ ...prev, isLoading: false, notFound: false }))
			querySnapshot.forEach(doc => {
				// doc.data() is never undefined for query doc snapshots
				setSearchData(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredCar, 'id'>) }
				])
			})
		} else {
			setInfo(prev => ({ ...prev, isLoading: false, notFound: true }))
		}
	} catch (e) {
		setInfo(prev => ({ ...prev, isLoading: false, notFound: true }))
		console.log(e)
	}
}
