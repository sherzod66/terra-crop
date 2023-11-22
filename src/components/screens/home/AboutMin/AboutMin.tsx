'use client'
import { FC, useEffect } from 'react'
import styles from './aboutMin.module.scss'
import cn from 'clsx'
import { animationScroll } from '@/util/animation'
import { threeBag } from './3d/threeBag'
const AboutMin: FC = () => {
	useEffect(() => {
		animationScroll(styles)
		threeBag('threeBag')
	}, [])
	return (
		<div className={styles.abutMin}>
			<div className={styles.abutMin__container}>
				<div className={styles.abutMin__row}>
					<div className={styles.abutMin__column}>
						<div
							id='_anim-items'
							className={cn(styles.abutMin__title, styles._anim_none__hide)}
						>
							Biz haqimizda
						</div>
						<p id='_anim-items' className={styles._anim_none__hide}>
							Dastlab “TerraCrop” kompaniyasining qishloq xo‘jaligi va sanoat
							maqsadlarida oltingugurt gul yetishtirish sohasidagi faoliyati
							sarhisob qilindi. Ammo vaqt o‘tishi bilan va kompaniya
							imkoniyatlaridan kelib chiqib, o‘z mahsulotlariga organik donador
							o‘g‘it va bentonit oltingugurtli o‘g‘it kabi boshqa materiallarni
							ham qo‘shib oldi. Hozirgi kunda ushbu kompaniya sanoat, qishloq
							xo'jaligi va oziq-ovqat sanoatida foydalanish uchun kaliy
							karbonat, o'simlik moyi va barcha turdagi organik o'g'itlar kabi
							boshqa mahsulotlarni taklif qilmoqda. TerraCrop oltingugurt
							gullari ishlab chiqaruvchisi va qishloq xo'jaligi o'g'itlari
							importchisi
						</p>
					</div>
					<div id='threeBag' className={styles.abutMin__column}></div>
				</div>
			</div>
		</div>
	)
}

export default AboutMin
