
import { ITaskProps } from "./TaskProps";
import styles from './Task.module.css'
import cn from 'classnames';
import Image from 'next/image';
import FlagIcon from './flag.svg'
import {useEffect, useRef, useState } from "react";
import { API } from "@/helpers/api";
import { getCookie } from "cookies-next";

export const getTasks = async() => {
}

export const Task = async ({task ,className, ...props}:ITaskProps):Promise<JSX.Element> => {
  return (
    <div className={cn(className ,styles.task, {
      [styles.noActive]: task.status == false
    })} {...props}>
      <p className={styles.user}>{task.users.user_name}</p>
      <p className={styles.title}>{task.title}</p>
      <p className={styles.created}>{task.created}</p>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={API.files.getImage + task.users.avatar} fill alt="avatar"/>
      </div>
      <FlagIcon className={cn(styles.flag, {
        [styles.privateFlag]: task.private,
        [styles.publicFlag]: !task.private
      })}/>
    </div>
  )
}