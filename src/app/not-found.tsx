import type { Metadata } from "next";
import styles from "@/assets/styles/notFound.module.scss";
export const metadata: Metadata = {
  title: "Not found",
  description: "",
};

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
  );
}
export default NotFound;
