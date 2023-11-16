import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { IProduct } from '@/types/product'
import {
	getNews,
	getNewsFour,
	getProduct,
	getProductFour,
	getSellers
} from '@/service/getProduct'
import { ISellers } from '@/types/sellers'
import { INews } from '@/types/news.type'
interface IRequiredCar extends Required<IProduct> {}
export const useAdminProduct = () => {
	const { id } = useParams()
	const [products, setProducts] = useState<IRequiredCar[]>([])
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	useEffect(() => {
		if (id) getProduct(String(id), setProducts, setIsInfo)
		else getProductFour('products', setProducts, setIsInfo)
	}, [id])

	return useMemo(
		() => ({
			id,
			products,
			isInfo,
			setIsInfo
		}),
		[id, products, isInfo]
	)
}

interface IRequiredSeller extends Required<ISellers> {}
export const useAdminSeller = () => {
	const { id } = useParams()
	const [products, setProducts] = useState<IRequiredSeller[]>([])
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	useEffect(() => {
		if (id) getSellers(String(id), setProducts, setIsInfo)
		else getSellers('sellers', setProducts, setIsInfo)
	}, [id])

	return useMemo(
		() => ({
			id,
			products,
			isInfo,
			setIsInfo
		}),
		[id, products, isInfo]
	)
}

interface IRequiredNews extends Required<INews> {}
export const useAdminNews = () => {
	const { id } = useParams()
	const [products, setProducts] = useState<IRequiredNews[]>([])
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	useEffect(() => {
		if (id) getNews(String(id), setProducts, setIsInfo)
		else getNews('news', setProducts, setIsInfo)
	}, [id])

	return useMemo(
		() => ({
			id,
			products,
			isInfo,
			setIsInfo
		}),
		[id, products, isInfo]
	)
}
export const useNewsMin = () => {
	const [products, setProducts] = useState<IRequiredNews[]>([])
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	useEffect(() => {
		getNewsFour('news', setProducts, setIsInfo)
	}, [])

	return useMemo(
		() => ({
			products,
			isInfo,
			setIsInfo
		}),
		[products, isInfo]
	)
}
