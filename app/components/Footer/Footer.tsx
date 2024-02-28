import { FooterProps } from "./FooterProps";
import styles from './Footer.module.css'
import cn from 'classnames'
import {format} from 'date-fns'

export const Footer = ({children, className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p
        className={cn(styles.title)}
      >c/c © 2023 - {format(new Date(), 'yyyy')}</p>
      <p className={styles.desc}>Розроблено: todayIsDecember</p>
    </footer>
  )
}