import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITask } from "../../../interfaces/Task.interface";

export interface ITaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  task: ITask,
  isEditable?: boolean,
  likes?: number[]
}