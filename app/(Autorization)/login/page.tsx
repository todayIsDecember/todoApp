import { Metadata } from "next"
import { FormLogin } from "../../components"
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Autorization() {
  return (
    <div className={styles.wrapper}>
      <FormLogin/>
    </div>
  )
}