import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, signOut } from 'firebase/auth'
const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)
export const SignOut = () => {
	signOut(auth).catch((error: Error) => {
		alert(`Something went wrong, ${error.message}`)
	})
}
