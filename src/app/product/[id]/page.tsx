import type { Metadata, ResolvingMetadata } from 'next'
import Layout from '@/components/layout/Layout'
import { fetchDataProduct } from '@/service/fetchDataProduct'
import { getMetaImage } from '@/util/getMetaImage'
import Product from '@/components/screens/product/Product'
import { IProduct } from '@/types/product'

//TODO:
type Props = {
	params: { id: string }
	searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id

	// fetch data
	const product = (await fetchDataProduct(id)).data() as IProduct
	const imageIndex = product.imageName.findIndex(name => name.includes('main'))
	const delItem = product.image.splice(imageIndex, 1)
	product.image = [...delItem, ...product.image]

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || []

	return {
		metadataBase: new URL('https://firebasestorage.googleapis.com'),
		title: `TerraCrop | ${product.name}`,
		description: `Ulgurji narxda sotib olish ${product.name} TerraCrop`,
		openGraph: {
			images: [...getMetaImage(product.image), ...previousImages]
		}
	}
}

const Page = async ({ params, searchParams }: Props) => {
	const data = (await fetchDataProduct(params.id)).data() as IProduct
	const imageIndex = data.imageName.findIndex(name => name.includes('main'))
	const delItem = data.image.splice(imageIndex, 1)
	data.image = [...delItem, ...data.image]

	return (
		<Layout>
			<Product data={data} />
		</Layout>
	)
}
export default Page
