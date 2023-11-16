'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import styles from './model.module.scss'
import { ISellers } from '@/types/sellers'
import { YMaps, Map, Placemark, RouteButton } from '@pbe/react-yandex-maps'
import cn from 'clsx'

type TMap = {
	setIsShow: Dispatch<
		SetStateAction<{
			show: boolean
			data?: ISellers | undefined
		}>
	>
	isShow: {
		show: boolean
		data?: ISellers | undefined
	}
}
const MapPopup: FC<TMap> = ({ isShow, setIsShow }) => {
	const parseLocation = isShow.data!.location.split(',')
	const finishParse = [+parseLocation[0], +parseLocation[1]]
	return (
		<>
			{isShow.show && (
				<div
					onClick={e => {
						!(e.target as HTMLElement).closest('#model-content') &&
							setIsShow({ ...isShow, show: false })
						!(e.target as HTMLElement).closest('#model-content') &&
							document.body.classList.toggle('lock')
					}}
					className={styles.model}
				>
					<div
						id='model-content'
						className={cn(styles.model__content, styles.bg)}
					>
						<YMaps
							query={{ apikey: '133b3708-1c55-470b-8767-19e75d2d9d81' }}
							preload={true}
						>
							<Map
								defaultState={{
									center: finishParse,
									zoom: 18
								}}
								className={styles.model__map}
							>
								<Placemark
									modules={['geoObject.addon.balloon']}
									defaultGeometry={finishParse}
									properties={{
										balloonContentHeader: isShow.data?.storeName,
										balloonContentBody: isShow.data?.address,
										balloonContentFooter: 'TerraCrop'
									}}
									options={{
										iconLayout: 'default#image',
										iconImageHref:
											'https://cdn-icons-png.flaticon.com/512/143/143960.png',
										iconImageSize: [35, 35],
										iconImageOffset: [-18, -34]
									}}
								/>
								<RouteButton options={{ float: 'right' }} />
							</Map>
						</YMaps>
					</div>
				</div>
			)}
		</>
	)
}

export default MapPopup
