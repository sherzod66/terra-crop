export const getMetaImage = (arr: string[]) => {
	const refreshArray: string[] = []
	arr.forEach(link => {
		refreshArray.push(link.slice(38))
	})
	return refreshArray
}
