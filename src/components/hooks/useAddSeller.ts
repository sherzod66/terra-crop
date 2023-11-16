import { ISellers } from '@/types/sellers'
import { TUi } from '@/types/ui.type'
import { useState, useMemo } from 'react'
import { defaultValueSeller } from '../screens/admin/form model/default/defaultValueSeller'
export const useAddSeller = () => {
	const [seller, setSeller] = useState<ISellers>(defaultValueSeller)
	const [ui, setUi] = useState<TUi>({
		loading: false,
		event: '',
		alertShow: false,
		text: ''
	})

	return useMemo(() => ({ seller, setSeller, ui, setUi }), [seller, ui])
}
