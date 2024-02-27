'use client'

import { FormTaskProps } from "./FormTaskProps";
import cn from 'classnames';
import styles from './FormTask.module.css'
import { useForm } from "react-hook-form";
import { IFormTask } from "./FormTask.interface";
import { Input, Button } from "..";
import { getCookie } from 'cookies-next'
import { API } from "@/helpers/api";


export const FormTask = ({className, ...props}: FormTaskProps): JSX.Element => {

  const {register, handleSubmit, reset} = useForm<IFormTask>()
  const onSubmit = async (data: IFormTask) => {
    const token = getCookie('token');
    const res = await fetch(API.task.create, {
      method: 'POST',
      body: JSON.stringify({title: data.title, private: data.private}),
      headers: {"Content-Type": "application/json", "Authorization": `bearer ${token}`},
    })

    reset();
    location.reload()
    return res;

  }

  return (
    <form className={cn(className, styles.form)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <p className={styles.formTitle}>Write your task</p>
      <Input
        viev="text"
        type="text"
        id="title"
        required
        placeholder="examle: read a book...."
        {...register('title')}
        className={styles.title}/>
        <div className={styles.checkPrivate}>
          <label htmlFor="checkbox">
            <Input
              viev="checkbox"
              type="checkbox"
              id="checkbox"
              {...register('private')}
              />
          </label>
          <span className={styles.checkbox}>Private?</span>
        </div>
      <Button
        appearence='btnForm'
        className={styles.btn}
        >Send</Button>
    </form>
  )
}