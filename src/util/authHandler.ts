import { FirebaseConfig } from '@/components/firebaseConfig/FirebaseConfig'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const app = initializeApp(FirebaseConfig)
const auth = getAuth(app)

export const AuthAdmin = (email: string, password: string) => {
	console.log(email, password)
	signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => {
			const user = userCredential.user
		})
		.catch(error => {
			console.error(error.code)
			console.error(error.message)
		})
}
