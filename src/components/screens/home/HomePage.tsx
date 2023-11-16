import { FC } from 'react'
import MainSlider from '../../ui/slider/MainSlider'
import BestProduct from './bestProduct/BestProduct'
import AboutMin from './AboutMin/AboutMin'
import WyUs from './wyUs/WyUs'
import Layout from '@/components/layout/Layout'
import NewsMin from './newsMin/NewsMin'

const HomePage: FC = () => {
	return (
		<Layout>
			<MainSlider />
			<BestProduct />
			<AboutMin />
			<WyUs />
			<NewsMin />
		</Layout>
	)
}

export default HomePage
