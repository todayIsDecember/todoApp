import Link from "next/link";
import styles from "../layout.module.css";
import cn from 'classnames'
import { Button } from "../components";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Вітаю <br />у програмі TodoApp</p>
      <p className={styles.title}>Почнімо</p>
      <Link href='./todoPage'>
        <Button appearence="btnMain">Почати</Button>
      </Link>
    </main>
  );
}
