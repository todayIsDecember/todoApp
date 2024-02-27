import { TextareaProps } from "./TextareaProps"
import styles from './Textarea.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from "react"

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <textarea {...props} className={cn(className, styles.textarea)} ref={ref}/>
  )
})