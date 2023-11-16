import { dashboardBarList } from '@/components/screens/admin/adminDashboard/dashboardBarList'
import styles from './dashDetail.module.scss'
import Search from '@/components/ui/search/Search'
import AdminDetail from '@/components/screens/admin/adminDashboard/AdminDetail'
import Model from '@/components/ui/model/Model'
const Page = async ({ params }: { params: { id: string } }) => {
	const getTitle = dashboardBarList.find(elemId =>
		elemId.link.includes(String(params.id))
	)
	return (
		<div className={styles.detailDash}>
			<div className={styles.detailDash__row}>
				<h1>{getTitle?.title}</h1>
				<Model />
			</div>
			{/* <Search /> */}
			<section className={styles.detailDash__content}>
				<AdminDetail />
			</section>
		</div>
	)
}
export default Page
