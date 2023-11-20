import { useParams } from 'next/navigation'
import { useState, useEffect, useMemo } from 'react'
import { TFeedback } from '../screens/contact-us/ContactUs'
import { getFeedback } from '@/service/getFeedback'

type TRequiredFeedback = Required<TFeedback>
export const useAdminFeedback = () => {
	const { id } = useParams()
	const [products, setProducts] = useState<TRequiredFeedback[]>([])
	const [isInfo, setIsInfo] = useState({ loading: false, notFound: false })
	useEffect(() => {
		getFeedback(setProducts, setIsInfo)
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
