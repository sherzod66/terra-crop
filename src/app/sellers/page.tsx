import Layout from '@/components/layout/Layout'
import Sellers from '@/components/screens/Sellers/Sellers'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: "Terra Crop | O'zbekiston sotuvchilari",
	description: 'Fertilizers'
}

export default function Home() {
	return (
		<Layout>
			<Sellers />
		</Layout>
	)
}
