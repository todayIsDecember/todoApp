import { getAllTasks } from '@/app/API/getAllTasks';
import styles from './page.module.css'
import { ITask } from '@/interfaces/Task.interface';
import { Button, Hr, Task } from '@/app/components';
import Link from 'next/link'
import { cookies } from 'next/headers'
export default async function TodoPage() {
  const tasks = await getAllTasks()
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  if(token) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.Actions}>
        <Link href={'/todoPage/account'} >
          <Button appearence='btnMain'>Перейти на власний аккаунт</Button>
        </Link>
        <Link href={'/todoPage/formTaskPage'}>
          <Button appearence='btnMain'>Додати завдання</Button>
        </Link>
        </div>
        <Hr/>
      <div className={styles.TasksContainer}>
        {tasks.map((task: ITask) => <Task task={task} key={task.task_id}/>)}
      </div>
      </div>
    );
  }else {
    return (
      <div className={styles.wrapper}>
      <div className={styles.TasksContainer}>
        {tasks.map((task: ITask) => <Task task={task} key={task.task_id}/>)}
      </div>
      </div>
    );
  }
}
