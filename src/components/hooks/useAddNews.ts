import { TUi } from '@/types/ui.type'
import { useState, useMemo } from 'react'
import { defaultValueNews } from '../screens/admin/form model/default/defaultValueSeller'
import { INews } from '@/types/news.type'
export const useAddNews = () => {
	const [news, setNews] = useState<INews>(defaultValueNews)
	const [ui, setUi] = useState<TUi>({
		loading: false,
		event: '',
		alertShow: false,
		text: ''
	})

	return useMemo(() => ({ news, setNews, ui, setUi }), [news, ui])
}
