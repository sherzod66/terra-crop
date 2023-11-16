import styles from "@/assets/styles/loader.module.scss";
function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.custom_loader}></div>
    </div>
  );
}
export default Loading;
