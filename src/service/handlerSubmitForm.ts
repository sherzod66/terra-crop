import { IProduct } from '@/types/product'
import { Dispatch, FormEvent, SetStateAction } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { defaultValue } from '@/components/screens/admin/form model/default/defaultValueProduct'
import { TUi } from '@/types/ui.type'
type THandler = (
	e: FormEvent<HTMLFormElement>,
	data: IProduct,
	file: FileList,
	setUi: Dispatch<SetStateAction<TUi>>,
	setData: Dispatch<SetStateAction<IProduct>>,
	article: FileList
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export const handlerSubmitForm: THandler = async (
	e,
	data,
	file,
	setUi,
	setData,
	article
) => {
	setUi(prev => ({ ...prev, loading: true }))
	console.log('start')
	const finalDate: IProduct = {
		description: data.description,
		image: [],
		imageName: [],
		name: data.name.toLowerCase(),
		article: '',
		articleName: '',
		table: data.table,
		type: data.type,
		subTitle: data.subTitle,
		createTime: Date.now()
	}
	console.log('Загрузка фото')
	for (let item of file) {
		const storageRef = ref(storage, `productsImage/${item.name}`)
		const snapshot = await uploadBytes(storageRef, item)
	}
	console.log('фото загруженно полученние ссылки')
	for (let i of file) {
		const getUrl = await getDownloadURL(ref(storage, `productsImage/${i.name}`))
		finalDate.image.push(getUrl)
		finalDate.imageName.push(i.name)
	}

	const storageArticle = ref(storage, `articles/${article[0].name}`)
	const addArticle = await uploadBytes(storageArticle, article[0])
	const articleUrl = await getDownloadURL(
		ref(storage, `articles/${article[0].name}`)
	)
	finalDate.article = articleUrl
	finalDate.articleName = article[0].name

	try {
		const writeDocument = await addDoc(collection(db, 'products'), finalDate)
		setUi(prev => ({
			...prev,
			loading: false,
			alertShow: true,
			event: 'success',
			text: 'Data uploaded successfully'
		}))
		setData(defaultValue)
		location.reload()
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
