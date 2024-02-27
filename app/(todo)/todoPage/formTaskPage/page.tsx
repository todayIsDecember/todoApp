import { FormTask } from '@/app/components'
import styles from './page.module.css'

export default function FormTaskPage():JSX.Element {
  return (
    <div className={styles.wrapper}>
      <FormTask className={styles.form}/>
    </div>
  )
}