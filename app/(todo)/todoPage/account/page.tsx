import { getUserInfo } from '@/app/API/getUserInfo';
import styles from './page.module.css';
import { cookies } from 'next/headers'
import { getUserTasksCount } from '@/app/API/getUserTasksCount';
import { IUser } from '@/interfaces/user.interface';
import { ITask } from '@/interfaces/Task.interface';
import { Task } from '@/app/components';
import { getUserLikes } from '@/app/API/getUserLikes';

export default async function Account():Promise<JSX.Element> {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  if(!token){
    return (
    <div>
      Ви не зареєстровані
    </div>
    )
  }else {
    const user: IUser = await getUserInfo(token.value)
    const count = await getUserTasksCount(token.value)
    const likes = await getUserLikes(token.value)
    return (
      <div className={styles.wrapper}>
        <div className={styles.data}>
          <div className={styles.name}>Ім`я: {user.user_name}</div>
          <div className={styles.name}>Пошта: {user.user_email}</div>
          <div className={styles.allCount}>Усього задач: {count.allCount}</div>
          <div className={styles.doneCount}>Усього закінчених задач: {count.doneCount}</div>
          <div className={styles.activeCount}>Усього активних задач: {count.activeCount}</div>
        </div>
        <div className={styles.tasks}>
          {user.tasks.map((task: ITask) => <Task isEditable task={task} likes={likes} key={task.task_id}/>)}
        </div>
      </div>
    )
  }
}