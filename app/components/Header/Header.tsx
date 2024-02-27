import { HeaderProps } from "./HeaderProps";
import styles from './Header.module.css'
import cn from 'classnames'
import Link from "next/link";
import { getUserInfo } from "@/app/API/getUserInfo";
import Image from 'next/image'
import { cookies } from 'next/headers'
import { API } from "@/helpers/api";

export const Header = async({children, className, ...props}: HeaderProps): Promise<JSX.Element> => {
  const cookieStore = cookies()
  const token = cookieStore.get('token') && cookieStore.get('token');
  if(!token) {
    return (
      <header className={cn(className, styles.header)} {...props}>
        <div className={styles.logo}>Todo App</div>
        <Link href='../../login' className={styles.signIn}>Увійти</Link>
      </header>
    )
  }

  const userInfo = await getUserInfo(token.value)
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href={'/'} className={styles.logo}>С/С</Link>
      <div className={styles.account}>
        <Image className={styles.img} src={API.files.getImage + userInfo?.avatar} fill alt="avatar"/>
      </div>
    </header>
  )

}