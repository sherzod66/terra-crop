import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { initializeApp } from 'firebase/app'
import {
	DocumentData,
	DocumentSnapshot,
	doc,
	getDoc,
	getFirestore
} from 'firebase/firestore'

type TFetchData = (
	id: string
) => Promise<DocumentSnapshot<DocumentData, DocumentData>>
const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const fetchDataProduct: TFetchData = async (id: string) =>
	await getDoc(doc(db, 'products', id))
