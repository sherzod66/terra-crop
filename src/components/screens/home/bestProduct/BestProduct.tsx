import { FC } from "react";
import styles from "./bestProduct.module.scss";
import BestImage from "./BestImage";
import Link from "next/link";
const BestProduct: FC = () => {
  return (
    <div className={styles.bestProduct}>
      <div className={styles.bestProduct__container}>
        <div className={styles.bestProduct__title}>Biz tavsiya qilamiz</div>
        <div className={styles.bestProduct__row}>
          <BestImage />
        </div>
        <Link
          id="_anim-items"
          className={styles.abutMin__link}
          href={"/products"}
        >
          Batafsil ko'rish
        </Link>
      </div>
    </div>
  );
};

export default BestProduct;
