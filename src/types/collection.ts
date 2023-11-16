export type TCollection = 'products' | 'sellers' | 'news'

type TAllCollection = {
	collection: string
}

export const AllCollection = (id: string) => {
	let value: string = ''
	if (id === 'fertilizers') {
		value = "O'g'itlar"
	} else if (id === 'pesticides') {
		value = 'Kimyoviy moddalar'
	} else if (id === 'profert') {
		value = 'Profert'
	} else if (id === 'other-goods') {
		value = 'Boshqa mahsulotlar'
	}
	return value
}
