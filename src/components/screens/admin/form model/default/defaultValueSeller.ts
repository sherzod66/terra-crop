import { INews } from '@/types/news.type'
import { ISellers } from '@/types/sellers'

export const defaultValueSeller: ISellers = {
	address: '',
	fullName: '',
	location: '',
	phoneNumber: '',
	region: '',
	storeName: ''
}

export const defaultValueNews: INews = {
	title: '',
	description: '',
	imageName: '',
	image: '',
	link: ''
}
