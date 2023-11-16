import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { INews } from '@/types/news.type'
import { IProduct } from '@/types/product'
import { ISellers } from '@/types/sellers'
import { initializeApp } from 'firebase/app'
import {
	getDocs,
	getFirestore,
	collection,
	limit,
	query,
	orderBy
} from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'

interface IRequiredCar extends Required<IProduct> {}
type TGet = (
	coll: string,
	setState: Dispatch<SetStateAction<IRequiredCar[]>>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
export const getProduct: TGet = async (coll, setState, setIsInfo) => {
	const time = Date.now()
	setIsInfo(prev => ({ ...prev, loading: true }))
	try {
		const products = await getDocs(collection(db, coll))
		console.log(Date.now() - time)
		if (!products.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			products.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredCar, 'id'>) }
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
interface IRequiredSeller extends Required<ISellers> {}
type TGetSeller = (
	coll: string,
	setState: Dispatch<SetStateAction<IRequiredSeller[]>>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void
export const getSellers: TGetSeller = async (coll, setState, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	try {
		const products = await getDocs(collection(db, coll))
		if (!products.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			products.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredSeller, 'id'>) }
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

export const getProductFour: TGet = async (coll, setState, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	const q = query(collection(db, coll), orderBy('createTime'), limit(4))
	try {
		const products = await getDocs(q)
		if (!products.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			products.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredCar, 'id'>) }
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

interface IRequiredNews extends Required<INews> {}
type TGetNews = (
	coll: string,
	setState: Dispatch<SetStateAction<IRequiredNews[]>>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void
export const getNews: TGetNews = async (coll, setState, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	try {
		const products = await getDocs(collection(db, coll))
		if (!products.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			products.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredNews, 'id'>) }
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

export const getNewsFour: TGetNews = async (coll, setState, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	const q = query(collection(db, coll), orderBy('createTime'), limit(4))
	try {
		const products = await getDocs(q)
		if (!products.empty) {
			setIsInfo(prev => ({ ...prev, loading: false }))
			products.forEach(doc => {
				//console.log(doc.data())
				setState(prev => [
					...prev,
					{ id: doc.id, ...(doc.data() as Omit<IRequiredNews, 'id'>) }
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
