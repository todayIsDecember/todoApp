'use client'

import { FormLoginProps } from "./FormLoginProps";
import styles from './FormLogin.module.css'
import cn from 'classnames'
import { Alert, Button, Input } from '../../components'
import { useForm } from "react-hook-form";
import { IFormLogin } from "./FormLogin.interface";
import  Link  from 'next/link'
import { motion } from 'framer-motion'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/helpers/api";
import EmailIcon from '../../../public/email.svg'
import PasswordIcon from '../../../public/password.svg'

export const FormLogin = ({values, className, ...props}: FormLoginProps): JSX.Element => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormLogin>()
  const [isError, setIsError] = useState<string>('')
  const router = useRouter()

  const onSubmit = async (formDate: IFormLogin) => {
    try {
      const res = await fetch(API.auth.login, {
        method: 'POST',
        body: JSON.stringify({
          "email": formDate.email,
          "password": formDate.password
        }),
        headers: {'Content-Type': 'application/json'}
      })

      const data = await res.json();
      if(data.message) {
        setIsError(data.message);
        setTimeout(() => {
          setIsError('')
        }, 3000)
        return;
      }
      document.cookie = `token=${data.access_token}; path=/;`
      router.push('/todoPage')
    } catch (error) {

    }

  }

  return (
    <div>
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        initial={{opacity: 0}}
        transition={{ease: "easeOut", duration: 0.7}}
        animate={{opacity: 1}}
      >
        <p className={styles.title}>Авторизація</p>
        <EmailIcon className={styles.emailIcon}/>
        <div className={cn(styles.inputGroup, styles.email)}>
          <Input
            viev="text"
            type="email"
            id="email"
            required
            className={cn(styles.input, styles.email)}
            {...register('email')}
          />
          <label htmlFor="email" className={styles.label}>Пошта</label>
        </div>
        <PasswordIcon className={styles.passwordIcon}/>
        <div className={cn(styles.inputGroup, styles.pas)}>
          <Input
            viev="text"
            type="password"
            id="password"
            required
            className={styles.input}
            {...register('password')}
          />
          <label htmlFor="password" className={styles.label}>Пароль</label>
        </div>
        <Button
          appearence="btnForm"
          className={styles.btn}
          >Увійти</Button>
        <p className={styles.helper}>Не маєте акаунта? &nbsp;
          <Link
            href="./register"
            className={styles.helperChild}
          >
            Зареєструйтесь
          </Link>
        </p>
      </motion.form>
      {isError && <Alert variants="bad" className={styles.alert}>{isError}</Alert>}
    </div>
  )
}