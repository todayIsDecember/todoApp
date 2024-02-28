import Link from "next/link";
import styles from "../layout.module.css";
import cn from 'classnames'
import { Button } from "../components";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Вітаю <br />у програмі Список Справ</p>
      <Link href='./todoPage'>
        <Button appearence="btnMain">Почнімо</Button>
      </Link>
    </main>
  );
}
