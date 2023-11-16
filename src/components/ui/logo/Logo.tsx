import Link from "next/link";
import { FC } from "react";
import styles from "./logo.module.scss";
const Logo: FC = () => {
  return (
    <Link href={"/"} className={styles.logoContainer}>
      <img src="/logo.png" alt="Terra crop" />
    </Link>
  );
};

export default Logo;
