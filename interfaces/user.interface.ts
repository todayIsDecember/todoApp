import { ITask } from "./Task.interface";

export interface IUser {
  user_name: string,
  password: string;
  avatar?: string;
  user_email: string;
  tasks: ITask[]
}