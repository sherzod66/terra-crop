import { IProduct, TTable } from '@/types/product'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

type TNameF = 'culture' | 'norm' | 'timing'
export const changeValue = (
	index: number,
	event: ChangeEvent<HTMLTextAreaElement>,
	data: IProduct,
	setData: Dispatch<SetStateAction<IProduct>>,
	name: TNameF
) => {
	if (name == 'culture') {
		const dataTable = [...data.table]
		setData(prev => ({ ...prev, table: [] }))
		const indexData = dataTable[index]
		dataTable.splice(index, 1, {
			culture: event.target.value,
			norm: indexData.norm,
			timing: indexData.timing
		})
		setData(prev => ({ ...prev, table: [...dataTable] }))
	} else if (name == 'norm') {
		const dataTable = [...data.table]
		setData(prev => ({ ...prev, table: [] }))
		const indexData = dataTable[index]
		dataTable.splice(index, 1, {
			culture: indexData.culture,
			norm: event.target.value,
			timing: indexData.timing
		})
		setData(prev => ({ ...prev, table: [...dataTable] }))
	} else if (name == 'timing') {
		const dataTable = [...data.table]
		setData(prev => ({ ...prev, table: [] }))
		const indexData = dataTable[index]
		dataTable.splice(index, 1, {
			culture: indexData.culture,
			norm: indexData.norm,
			timing: event.target.value
		})
		setData(prev => ({ ...prev, table: [...dataTable] }))
	}
}
