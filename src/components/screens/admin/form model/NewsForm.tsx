'use client'
import { useAddNews } from '@/components/hooks/useAddNews'
import Alert from '@/components/ui/Alerts/Alert'
import Loader from '@/components/ui/Loader/Loader'
import styles from './fromModel.module.scss'
import { FC, useState } from 'react'
import { isTrueNews } from '@/util/isTrue'
import { handlerSubmitNews } from '@/service/handlerSumnitNews'

const NewsForm: FC = () => {
	const { news, setNews, setUi, ui } = useAddNews()
	const [file, setFile] = useState<FileList | null>(null)
	return (
		<>
			{ui.loading && <Loader />}
			{ui.alertShow && (
				<Alert text={ui.text} type={ui.event} setState={setUi} />
			)}
			<form
				className={styles.from}
				onSubmit={e => {
					e.preventDefault()
					isTrueNews(news, file)
						? handlerSubmitNews(e, news, file as FileList, setUi, setNews)
						: setUi({
								...ui,
								alertShow: true,
								text: 'Fill in all the fieldss',
								event: 'error'
						  })
				}}
			>
				<label htmlFor='title'>News title</label>
				<input
					type='text'
					id='title'
					onChange={e => setNews(prev => ({ ...prev, title: e.target.value }))}
					value={news.title}
				/>

				<label htmlFor='description'>News Description</label>
				<textarea
					id='description'
					onChange={e =>
						setNews(prev => ({ ...prev, description: e.target.value }))
					}
					value={news.description}
				/>

				<label htmlFor='firstImage'>News photo</label>
				<input
					onChange={event => setFile(event.target.files)}
					type='file'
					name='imgSelect'
					accept='.jpg, .png, .gif, .HEIC, .jpeg, .webp'
					multiple={false}
					id='firstImage'
				/>

				<label htmlFor='link'>news Link</label>
				<input
					type='text'
					id='link'
					placeholder='/products/fertilizers'
					onChange={e => setNews(prev => ({ ...prev, link: e.target.value }))}
					value={news.link}
				/>

				<button type='submit'>Add</button>
			</form>
		</>
	)
}

export default NewsForm
