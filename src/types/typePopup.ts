import { TFeedback } from '@/components/screens/contact-us/ContactUs'
import { INews } from './news.type'
import { IProduct } from './product'
import { ISellers } from './sellers'

export interface IPopup {
	show: boolean
	dataP?: IProduct
	dataS?: ISellers
	dataN?: INews
	dataF?: TFeedback
}
