'use client'

import { FormTaskProps } from "./FormTaskProps";
import cn from 'classnames';
import styles from './FormTask.module.css'
import { useForm } from "react-hook-form";
import { IFormTask } from "./FormTask.interface";
import { Input, Button, Textarea } from "..";
import { API } from "@/helpers/api";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'



export const FormTask = ({className, ...props}: FormTaskProps): JSX.Element => {
  const [token, setToken] = useState<string>('')
  const router = useRouter()
  useEffect(() => {
    const cookies = document.cookie.split('=')[1];

    setToken(cookies)
  }, [])
  const {register, handleSubmit, reset, control} = useForm<IFormTask>()

  const onSubmit = async (data: IFormTask) => {
    const res = await fetch(API.task.create, {
      method: 'POST',
      body: JSON.stringify({title: data.title, private: data.private, category: 'Sport'}),
      headers: {"Content-Type": "application/json", "Authorization": `bearer ${token}`},
    })

    router.back();
    return res;

  }


  return (
    <form className={cn(className, styles.form)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <p className={styles.formTitle}>Напишіть своє завдання</p>
      <Textarea
        {...register('title')}
        required
        placeholder="писати тут..."
        className={styles.title}
      />
        <div className={styles.inputGroup}>
        </div>
        <div className={styles.checkPrivate}>
          <label htmlFor="checkbox">
            <Input
              viev="checkbox"
              type="checkbox"
              id="checkbox"
              {...register('private')}
              />
          </label>
          <span className={styles.checkbox}>Зробити приватним?</span>
        </div>
      <Button
        appearence='btnForm'
        className={styles.btn}
        >Send</Button>
    </form>
  )
}