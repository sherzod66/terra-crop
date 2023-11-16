import ChoiceProducts from '@/components/screens/chise products/ChoiceProducts'
import { getDataProducts } from '@/service/getDataProducts'
import { IProduct } from '@/types/product'
import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Terra Crop | Mahsulotlar'
}
const ProductChoice = () => {
	return <ChoiceProducts />
}
export default ProductChoice
