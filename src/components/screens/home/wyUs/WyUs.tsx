import { FC } from 'react'
import styles from './wyUs.module.scss'
const WyUs: FC = () => {
	return (
		<div className={styles.wyUs}>
			<div className={styles.wyUs__container}>
				<p className={styles.wyUs__title}>Nima uchun TerraCrop</p>
				<div className={styles.wyUs__content}>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube-nocookie.com/embed/UKpwZM4xFQY?si=Dp4G9Gf0VTFGVEwS'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default WyUs
