import styles from './Button.module.css'
import cn from 'classnames'
import { ButtonProps } from './ButtonProps'
import ArrowIcon from './arrow.svg'

// eslint-disable-next-line react/display-name
export const Button =  ({children, isActive, appearence, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.btnForm]: appearence == 'btnForm',
        [styles.btnMain]: appearence == 'btnMain',
        [styles.default]: appearence == 'default',
        [styles.isActive]: isActive
      })}
      {...props}
      // ref={ref}
    >
      {children}
      <ArrowIcon className={styles.arrow}/>
    </button>
  )
}