import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { IFormLogin } from "./FormLogin.interface";

export interface FormLoginProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  values?: IFormLogin
}