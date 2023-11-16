type TProductType = 'fertilizers' | 'pesticides' | ''
export interface TTable {
	culture: string
	norm: string
	timing: string
}
export interface IProduct {
	id?: string
	createTime?: number
	name: string
	image: string[]
	imageName: string[]
	type: TProductType | string
	description: string
	subTitle?: string
	table: TTable[]
}
