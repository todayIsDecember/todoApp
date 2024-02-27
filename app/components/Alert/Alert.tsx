'use client'

import { AlertProps } from "./Alert.props";
import styles from './Alert.module.css'
import cn from 'classnames'
// eslint-disable-next-line react/display-name
export const Alert = ({variants, children, className, ...props}: AlertProps):JSX.Element => {
  return (
    <div
      className={cn(className, styles.alert, {
        [styles.success]: variants == 'success',
        [styles.bad]: variants == 'bad'
      })}
      {...props}
    >
      {children}
    </div>
  )
}