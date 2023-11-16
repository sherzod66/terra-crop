export const getDate = (time: number) => {
	const date = new Date(time).toLocaleDateString()
	return date
}
export const getTime = (time: number) => {
	const date = `${new Date(time).getHours()}: ${new Date(time).getMinutes()}`
	console.log(date)
	return date
}
