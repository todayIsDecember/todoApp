import { Metadata } from "next"
import { FormRegister } from "../../components"
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Register'
}

export default function Autorization() {
  return (
    <div className={styles.wrapper}>
      <FormRegister/>
    </div>
  )
}