'use client'

import { ITaskProps } from "./TaskProps";
import styles from './Task.module.css'
import cn from 'classnames';
import Image from 'next/image';
import { API } from "@/helpers/api";
import { useEffect, useState } from "react";
import LikeSvg from '../../../public/like.svg'
import { Hr } from "..";

export const Task = ({task, likes = [], isEditable = false ,className, ...props}:ITaskProps):JSX.Element => {
  let [isPrivate, setIsPrivate] = useState<boolean>(false)
  let [isStatus, setIsStatus] = useState<boolean>(false)
  let [isLiked, setIsLiked] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')
  let [clickedOnLike, setClickedOnLike] = useState<number>(0)
  useEffect(() => {
    const cookies = document.cookie.split('=')[1];

    setToken(cookies)

  }, [])
  useEffect(() => {
    setIsPrivate(task.private)
    setIsStatus(task.status)
  }, [task.private, task.status])

  useEffect(() => {

    if(likes.includes(task.task_id)) {
      setIsLiked(true)
    }

  }, [likes, task.task_id])

  const changePrivate = () => {
    setIsPrivate(!isPrivate)
    fetch(`${API.task.changePrivate}/${task.task_id}`, {
      method: 'PATCH',
      body: JSON.stringify({private: !isPrivate}),
      headers: {"Content-Type": "application/json"},
    })
  }

  const changeStatus = () => {
    setIsStatus(!isStatus)
    fetch(`${API.task.changeStatus}/${task.task_id}`, {
      method: 'PATCH',
      body: JSON.stringify({status: !isStatus}),
      headers: {"Content-Type": "application/json"},
    })
  }

  const changeLike = () => {
    setIsLiked(!isLiked)
    isLiked ? setClickedOnLike(clickedOnLike - 1) : setClickedOnLike(clickedOnLike + 1)
    fetch(`${API.likes.addLike}/${task.task_id}`, {
      method: 'POST',
      body: JSON.stringify({like: !isLiked}),
      headers: {"Content-Type": "application/json", "Authorization": `bearer ${token}`},
    })
  }

  return (
    <div className={cn(className ,styles.task, {
      [styles.isEditable]: isEditable,
      [styles.done]: task.status,
    })} {...props}>
      <p className={styles.user}>{task.users.user_name}</p>
      <p className={styles.title}>{task.title}</p>
      <p className={styles.created}>{task.created}</p>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={API.files.getImage + task.users.avatar} height={40} width={40} alt="avatar"/>
      </div>
      <LikeSvg className={cn(styles.like, {[styles.liked]: isLiked, [styles.hidden]: isEditable})} onClick={() => changeLike()}/>
      <div className={cn(styles.likeCount, {[styles.hidden]: isEditable})}>{task.likes?.length + clickedOnLike}</div>
      {isEditable &&
        <div className={styles.edit}>
          <label className={cn(styles.switch, styles.switchPrivate)}>
            <input type="checkbox" checked={isPrivate} onChange={() => changePrivate()}/>
            <span className={styles.slider}></span>
          </label>
          <p className={styles.private}>Приватність</p>
          <label className={cn(styles.switch, styles.switchStatus)}>
            <input type="checkbox" checked={isStatus} onChange={() => changeStatus()}/>
            <span className={styles.slider}></span>
          </label>
          <p className={styles.status}>Статус</p>
          <div className={styles.userLikes}>
            <p className={styles.userLikesTitle}>Користувачі які вподобали вашу задачу</p>
            {task.likes?.map((like: any) => <div key={like.like_id} className={styles.userLikeContainer}>
              <Image className={styles.img} src={API.files.getImage + like.users.avatar} width={40} height={40} alt="avatar"/>
              <div className={styles.userLike} key={like.like_id}>{like.users.user_name}</div>
            </div>)}
          </div>
        </div>
      }
    </div>
  )
}