import styles from './loader.module.scss'
function Loader() {
	return (
		<div className={styles.loading}>
			<div className={styles.custom_loader}></div>
		</div>
	)
}
export default Loader
