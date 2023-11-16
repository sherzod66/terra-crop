import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { IProduct } from '@/types/product'
import { initializeApp } from 'firebase/app'
import {
	DocumentData,
	DocumentSnapshot,
	collection,
	getDocs,
	getFirestore,
	query,
	where
} from 'firebase/firestore'

type TFetchData = (id: string) => Promise<IProduct[]>
const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const getDataProducts: TFetchData = async (id: string) => {
	const data: IProduct[] = []
	const q = query(collection(db, 'products'), where('type', '==', id))
	const snapshot = await getDocs(q)
	if (!snapshot.empty) {
		snapshot.forEach(doc => {
			data.push({ id: doc.id, ...(doc.data() as IProduct) })
		})
	}
	return data
}
