import Image from "next/image";
import styles from "./page.module.scss";
import Games from "./features/games";

export default function Home() {
  return (
    <div className={styles.page}>
     <Games />
    </div>
  );
}
