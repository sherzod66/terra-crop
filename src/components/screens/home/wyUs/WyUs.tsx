import { FC } from 'react'
import styles from './wyUs.module.scss'
const WyUs: FC = () => {
	return (
		<div className={styles.wyUs}>
			<div className={styles.wyUs__container}>
				<p className={styles.wyUs__title}>Nima uchun TerraCrop</p>
				<div className={styles.wyUs__content}>
					<iframe
						src='https://www.youtube-nocookie.com/embed/-b1_Iokr0Vc?si=cF0qXXbPhMa-Hc9G'
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
