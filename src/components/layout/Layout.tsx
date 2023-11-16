import { FC } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
type TLayout = {
	children:
		| JSX.Element[]
		| JSX.Element
		| React.ReactElement
		| React.ReactElement[]
		| string
}

const Layout: FC<TLayout> = ({ children }) => {
	return (
		<>
			<Header />
			{children && children}
			<Footer />
		</>
	)
}

export default Layout
