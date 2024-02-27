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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>()
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
        <p className={styles.title}>Login</p>
        <EmailIcon className={styles.emailIcon}/>
        <div className={cn(styles.inputGroup, styles.email)}>
          <Input
            viev="text"
            type="text"
            id="email"
            required
            className={cn(styles.input, styles.email)}
            {...register('email')}
          />
          <label htmlFor="email" className={styles.label}>Email</label>
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
          <label htmlFor="password" className={styles.label}>password</label>
        </div>
        <Button
          appearence="btnForm"
          className={styles.btn}
          >Login</Button>
        <p className={styles.helper}>Don`t have account &nbsp;
          <Link
            href="./register"
            className={styles.helperChild}
          >
            Sign in
          </Link>
        </p>
      </motion.form>
      {isSuccess &&
        <motion.div
          initial={{opacity: 0}}
          transition={{ease: 'easeOut', duration: 3}}
          animate={{opacity: [0, 1, 0]}}
        >
          <Alert
            variants='success'
            className={styles.alert}>
            Ви успішно зайшли
          </Alert>
        </motion.div>}
        {isError &&
          <motion.div
            initial={{opacity: 1}}
            transition={{ease: 'easeOut', duration: 3}}
            animate={{opacity: [0, 1, 0]}}
          >
            <Alert
              variants='bad'
              className={styles.alert}>
              {isError}
            </Alert>
          </motion.div>}
        </div>
  )
}