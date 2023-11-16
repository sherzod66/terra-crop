import { Dispatch, FormEvent, SetStateAction } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { TUi } from '@/types/ui.type'
import { INews } from '@/types/news.type'
import { defaultValueNews } from '@/components/screens/admin/form model/default/defaultValueSeller'
type THandler = (
	e: FormEvent<HTMLFormElement>,
	data: INews,
	file: FileList,
	setUi: Dispatch<SetStateAction<TUi>>,
	setData: Dispatch<SetStateAction<INews>>
) => void

const app = initializeApp(FirebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export const handlerSubmitNews: THandler = async (
	e,
	data,
	file,
	setUi,
	setData
) => {
	setUi(prev => ({ ...prev, loading: true }))
	console.log('start')
	const finalDate: INews = {
		title: data.title,
		description: data.description,
		image: '',
		imageName: '',
		link: data.link,
		createTime: Date.now()
	}
	console.log('Загрузка фото')
	const storageRef = ref(storage, `newsImage/${file[0].name}`)
	const snapshot = await uploadBytes(storageRef, file[0])
	console.log('фото загруженно полученние ссылки')
	const getUrl = await getDownloadURL(ref(storage, `newsImage/${file[0].name}`))
	finalDate.image = getUrl
	finalDate.imageName = file[0].name

	try {
		if (finalDate.image !== '') {
			const writeDocument = await addDoc(collection(db, 'news'), finalDate)
			setUi(prev => ({
				...prev,
				loading: false,
				alertShow: true,
				event: 'success',
				text: 'Data uploaded successfully'
			}))
			setData(defaultValueNews)
			location.reload()
		}
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
