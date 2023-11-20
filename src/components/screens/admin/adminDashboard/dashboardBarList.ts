import type { IconType } from 'react-icons/lib'
import { BiSolidShoppingBagAlt, BiSolidNews } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'
import { VscFeedback } from 'react-icons/vsc'
import { FC } from 'react'
import ProductForm from '@/components/screens/admin/form model/ProductForm'
import NewsForm from '@/components/screens/admin/form model/NewsForm'
import AdminProduct from './AdminProduct'
import AdminNews from './AdminNews'
import AdminSellers from './AdminSellers'
import SellersForm from '../form model/SellersForm'
import AdminFeedback from './AdminFeedback'
export type TDashBar = {
	link: string
	title: string
	icons: IconType
	ModelDetail: FC
	DashboardComponent: FC
}
export const dashboardBarList: TDashBar[] = [
	{
		link: '/admin/products',
		title: 'Products',
		icons: BiSolidShoppingBagAlt,
		ModelDetail: ProductForm,
		DashboardComponent: AdminProduct
	},
	{
		link: '/admin/news',
		title: 'News',
		icons: BiSolidNews,
		ModelDetail: NewsForm,
		DashboardComponent: AdminNews
	},
	{
		link: '/admin/sellers',
		title: 'Sellers',
		icons: FaUserEdit,
		ModelDetail: SellersForm,
		DashboardComponent: AdminSellers
	},
	{
		link: '/admin/feedback',
		title: 'Feedback',
		icons: VscFeedback,
		ModelDetail: SellersForm,
		DashboardComponent: AdminFeedback
	}
]
