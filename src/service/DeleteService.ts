import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { INews } from '@/types/news.type'
import { IProduct } from '@/types/product'
import { ISellers } from '@/types/sellers'
import { initializeApp } from 'firebase/app'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { NextRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'

type TDelProduct = (
	data: Required<IProduct>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export const DeleteServiceProduct: TDelProduct = async (data, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	for (let item of data.imageName) {
		const deleteRef = ref(storage, `productsImage/${item}`)
		try {
			await deleteObject(deleteRef)
		} catch (e) {
			console.log(e)
		}
	}
	try {
		const docRemove = doc(db, 'products', data.id)
		await deleteDoc(docRemove)
		console.log('susses')
		setIsInfo(prev => ({ ...prev, loading: false }))
		location.reload()
	} catch (e) {
		alert('Something went wrong')
		console.error(e)
	}
}

type TDelDoc = (
	data: Required<ISellers>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void

export const DeleteDoc: TDelDoc = async (data, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	try {
		const docRemove = doc(db, 'sellers', data.id)
		await deleteDoc(docRemove)
		console.log('susses')
		setIsInfo(prev => ({ ...prev, loading: false }))
		location.reload()
	} catch (e) {
		alert('Something went wrong')
		console.error(e)
	}
}
type TDelNews = (
	data: Required<INews>,
	setIsInfo: Dispatch<
		SetStateAction<{
			loading: boolean
			notFound: boolean
		}>
	>
) => void
export const DeleteNews: TDelNews = async (data, setIsInfo) => {
	setIsInfo(prev => ({ ...prev, loading: true }))
	const deleteRef = ref(storage, `newsImage/${data.imageName}`)
	try {
		await deleteObject(deleteRef)
		const docRemove = doc(db, 'news', data.id)
		await deleteDoc(docRemove)
		console.log('susses')
		setIsInfo(prev => ({ ...prev, loading: false }))
		location.reload()
	} catch (e) {
		alert('Something went wrong')
		console.error(e)
	}
}
