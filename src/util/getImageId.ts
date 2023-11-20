export const getImageChangeId = (params: string[], imageIndex: number) => {
	const knowIndex = imageIndex
	if (knowIndex < 1) {
		return 1
	} else if (knowIndex > 1) {
		return 0
	} else {
		return 0
	}
}
