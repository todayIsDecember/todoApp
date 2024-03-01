import { Metadata } from "next"
import styles from './page.module.css'
import { Button } from "@/app/components"
import  Link  from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome'
}

export default function Autorization() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Вітаю, ви успішно зареєструвались</p>
      <p className={styles.subtitle}>Зараз ви зможете пройти авторизацію</p>
      <Link href='../login'><Button appearence="btnMain">Авторизуватися</Button></Link>
    </div>
  )
}