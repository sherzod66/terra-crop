'use client'
import { SiteMapData } from '@/components/header/headerList/listData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { AiFillHome } from 'react-icons/ai'

const SiteMap: FC<{ productName?: string }> = ({ productName }) => {
	const pathname = usePathname()
	const getSiteMap = () => {
		const title = SiteMapData.find(route => pathname.includes(route.link))
		return title?.title
	}
	return (
		<div className='site-map __container'>
			<Link href={'/'}>
				<AiFillHome />
			</Link>
			/{getSiteMap()}
			{productName && `/${productName}`}
		</div>
	)
}

export default SiteMap
