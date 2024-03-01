'use client'

import { FormRegisterProps } from "./FormRegisterProps";
import styles from './FormRegister.module.css'
import cn from 'classnames'
import { Alert, Button, Input } from '..'
import { useForm } from "react-hook-form";
import { IFormRegister } from "./FormRegister.interface";
import  Link  from 'next/link'
import { motion } from 'framer-motion'
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/helpers/api";
import EmailIcon from '../../../public/email.svg'
import PasswordIcon from '../../../public/password.svg'
import UserIcon from '../../../public/name.svg'
import Image from 'next/image'

export const FormRegister = ({className, ...props}: FormRegisterProps): JSX.Element => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormRegister>();
  const [imageUrl, setImageUrl] = useState<string>('')
  const [image, setImage] = useState<File>(new File([], ''))
  const [isError, setIsError] = useState<string>()
  const router = useRouter()

  const handleImageUpload = (changeEvent:any) => {
    const image = changeEvent.target.files[0];

    setImage(image)

    if(image) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if(result && typeof result === 'string') {
          setImageUrl(reader.result as string)
        }else {
          setImageUrl(reader.result as string)
        }
      };
      reader.readAsDataURL(image)
    }
  }

  const onSubmit = async (formDate: IFormRegister) => {
    formDate.avatar = image


    try {
      const res = await fetch(API.auth.register, {
      method: 'POST',
      body: JSON.stringify({
        "email": formDate.email,
        "password": formDate.password,
        "name": formDate.name,
        "avatar":formDate.avatar.name? `${formDate.avatar.name.split('.')[0]}.webp`: undefined
      }),
      headers: {'Content-Type': 'application/json'}
    })
    const date = new FormData();
    date.append('files', formDate.avatar, formDate.avatar.name)

    const data = await res.json();
    if(data.message) {
      setIsError(data.message)
      setTimeout(() => {
        setIsError('')
      }, 3000)
      return;
    }


    await fetch(API.files.uploadImage, {
      method: 'POST',
      body: date
    })
      router.push('./register/welcomePage')
    }
    catch (e: any) {
      setIsError(e.message)
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
        <p className={styles.title}>Sign In</p>
        <motion.div
          className={cn(styles.inputGroup, styles.avatar)}
          whileHover={{
            transition: {duration: 0.3},
            scale: 1.03
          }}
          >
            <label className={styles.avatar}>
              <Input
                viev="avatar"
                type="file"
                id="avatar"
                className={cn(styles.avatar)}
                {...register('avatar')}
                onChange={handleImageUpload}
                // accept="image/*"
              />
              {imageUrl && <Image src={imageUrl} alt="uploaded" width={50} height={50} className={styles.imgPreload}/>}
            </label>
        </motion.div>
        <EmailIcon className={styles.emailIcon}/>
        <div className={cn(styles.inputGroup, styles.email)}>
          <Input
            viev="text"
            type="email"
            id="email"
            required
            className={cn(styles.email)}
            {...register('email')}
          />
          <label htmlFor="email" className={styles.label}>Email</label>
        </div>
        <UserIcon className={styles.userIcon}/>
        <div className={cn(styles.inputGroup, styles.name)}>
          <Input
            viev="text"
            type="text"
            id="name"
            required
            className={cn(styles.name)}
            {...register('name')}
          />
          <label htmlFor="name" className={styles.label}>Name</label>
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
          >Sign In</Button>
      </motion.form>
      {isError && <Alert variants='bad'>{isError}</Alert>}
    </div>
  )
}