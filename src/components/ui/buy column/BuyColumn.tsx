import { FC } from 'react'
import styles from './buyColumn.module.scss'
import Link from 'next/link'
const BuyColumn: FC = () => {
	return (
		<div className={styles.buy_column}>
			<div className={styles.buy_column__container}>
				<div className={styles.buy_column__row}>
					<div className={styles.buy_column__item}>
						<p>
							Agar siz ushbu mahsulotni sotib olmoqchi bo'lsangiz,
							sotuvchilarimiz bilan hoziroq bog'laning
						</p>
					</div>
					<div className={styles.buy_column__item}>
						<Link href={'/sellers'}>Bog'lanish</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BuyColumn
