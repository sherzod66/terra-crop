export const headerUtil = (styles: { readonly [key: string]: string }) => {
	const header = document.getElementById('header')
	const scrollActive: number[] = []
	window.addEventListener('scroll', () => {
		scrollActive.push(scrollY)
		if (scrollY === 0) {
			;(header as HTMLElement).classList.remove(`${styles._header__fixed}`)
		} else if (scrollY < scrollActive[scrollActive.length - 2]) {
			;(header as HTMLElement).classList.add(`${styles._header__fixed}`)
		} else {
			;(header as HTMLElement).classList.remove(`${styles._header__fixed}`)
		}
	})
}
