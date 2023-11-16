'use client'
import { createContext, useEffect, useState } from 'react'
import { FirebaseConfig } from '../firebaseConfig/FirebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
type TContext = {
	isAuth: boolean
	setIsAuth: (isAuth: boolean) => void
}

export const AuthContext = createContext<TContext>({
	isAuth: false,
	setIsAuth: () => false
})

type TChildren = {
	children: React.ReactNode
}
export default function AuthProvider({ children }: TChildren) {
	const [isAuth, setIsAuth] = useState(false)
	const app = initializeApp(FirebaseConfig)
	const auth = getAuth(app)

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setIsAuth(!isAuth)
			} else {
				setIsAuth(false)
			}
		})
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}
