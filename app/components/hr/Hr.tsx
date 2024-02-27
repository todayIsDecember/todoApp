import { HrProps } from "./HrProps";
import cn from 'classnames'
import styles from './Hr.module.css'

export const Hr = ({className, ...props}: HrProps): JSX.Element => {
  return (
    <div className={cn(className, styles.hr)}></div>
  )
}