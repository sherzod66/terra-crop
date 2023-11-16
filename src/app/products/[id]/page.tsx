import Layout from '@/components/layout/Layout'
import Products from '@/components/screens/products/Products'
import { getDataProducts } from '@/service/getDataProducts'
import { AllCollection } from '@/types/collection'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
	params: { id: string }
}
export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id
	return {
		title: `TerraCrop | Mahsulotlar ${AllCollection(id)}`
	}
}

const Page = async ({ params }: Props) => {
	const data = await getDataProducts(params.id)
	return (
		<Layout>
			<Products data={data} id={params.id} />
		</Layout>
	)
}
export default Page
