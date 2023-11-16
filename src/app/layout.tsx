import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.scss'
import AuthProvider from '@/components/context/Context'

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--var-outfit'
})

export const metadata: Metadata = {
	title: 'Terra Crop',
	description:
		"Dastlab “TerraCrop” kompaniyasining qishloq xo‘jaligi va sanoat maqsadlarida oltingugurt gul yetishtirish sohasidagi faoliyati sarhisob qilindi. Ammo vaqt o‘tishi bilan va kompaniya imkoniyatlaridan kelib chiqib, o‘z mahsulotlariga organik donador o‘g‘it va bentonit oltingugurtli o‘g‘it kabi boshqa materiallarni ham qo‘shib oldi. Hozirgi kunda ushbu kompaniya sanoat, qishloq xo'jaligi va oziq-ovqat sanoatida foydalanish uchun kaliy karbonat, o'simlik moyi va barcha turdagi organik o'g'itlar kabi boshqa mahsulotlarni taklif qilmoqda. Mithaq Co. oltingugurt gullari ishlab chiqaruvchisi va qishloq xo'jaligi o'g'itlari importchisi",
	authors: [{ name: 'Sherzod Sadillaev [sherzodjonsadillaev@gmail.com]' }],
	icons: '/favicon.svg'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz'>
			<body className={outfit.variable}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}
