import { searchProduct } from '@/service/searchProduct'
import { IProduct } from '@/types/product'
import { useEffect, useMemo, useState } from 'react'
interface IRequiredCar extends Required<IProduct> {}
export const useSearch = () => {
	const [inputV, setInputV] = useState('')
	const [searchData, setSearchData] = useState<IRequiredCar[]>([])
	const [info, setInfo] = useState({ isLoading: false, notFound: false })
	useEffect(() => {
		if (inputV !== '') searchProduct(inputV, setSearchData, setInfo)
	}, [inputV])

	return useMemo(
		() => ({
			setInputV,
			searchData,
			info
		}),
		[inputV, searchData, info]
	)
}
