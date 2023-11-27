import { INews } from '@/types/news.type'
import { IProduct } from '@/types/product'
import { ISellers } from '@/types/sellers'

export const isTrue = (
	data: IProduct,
	file: FileList | null,
	article: FileList | null
) =>
	data.description !== '' &&
	data.name !== '' &&
	data.subTitle !== '' &&
	data.type !== '' &&
	data.table.length > 0 &&
	file !== null &&
	article !== null

export const isTrueSeller = (data: ISellers) =>
	data.fullName !== '' &&
	data.address !== '' &&
	data.phoneNumber !== '' &&
	data.location !== '' &&
	data.region !== '' &&
	data.storeName !== ''

export const isTrueNews = (data: INews, file: FileList | null) =>
	data.title !== '' && data.description !== '' && file !== null
