import { getAllTasks } from '@/app/API/getAllTasks';
import styles from './page.module.css'
import { ITask } from '@/interfaces/Task.interface';
import { Task } from '@/app/components';
export default async function TodoPage() {
  const tasks = await getAllTasks()
  return (
    <div className={styles.wrapper}>
      {tasks.map((task: ITask) => <Task task={task} key={task.task_id}/>)}
    </div>
  );
}
