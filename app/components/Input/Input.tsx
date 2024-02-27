import styles from './Input.module.css'
import cn from 'classnames'
import {format} from 'date-fns'
import { InputProps } from './InputProps'
import { ForwardedRef, forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({viev='text', error, className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
      <input
      className={cn(className, styles.input, {
        [styles.text] : viev == 'text',
        [styles.avatar] : viev == 'avatar',
        [styles.checkbox] : viev == 'checkbox'
      })}
      {...props}
      ref={ref}
    />
  )
})