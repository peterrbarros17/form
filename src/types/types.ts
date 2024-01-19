import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type ButtonProps = {
  children: React.ReactNode;
  type: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  placeholder: string;
  required?: boolean;
  type: string;
  name: string;
  id: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FormErrors = {
  [key: string]: string;
};
