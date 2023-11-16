'use client'
import { FC } from 'react'
import styles from './adminDash.module.scss'
import { dashboardBarList } from './dashboardBarList'
import { useAdminProduct } from '../../../hooks/useAdminProduct'
import Loader from '@/components/ui/Loader/Loader'
import cn from 'clsx'
import { getDate, getTime } from '@/util/getTime'
import { useParams } from 'next/navigation'
// type TProps = {
// 	id: string
// 	title: TDashBar | undefined
// }
const AdminDetail: FC = () => {
	const { id } = useParams()
	const DashBoard = dashboardBarList.findIndex(el =>
		el.link.includes(String(id))
	)
	return (
		<>
			{dashboardBarList.map(
				(el, index) =>
					index === DashBoard && <el.DashboardComponent key={index} />
			)}
		</>
	)
}

export default AdminDetail
