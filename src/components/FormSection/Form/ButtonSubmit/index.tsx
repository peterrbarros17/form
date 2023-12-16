import { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonSubmit({ children, onClick, type }: ButtonProps) {
  return (
    <button
      className={`uppercase bg-[var(--green)] py-4
       text-white font-semibold rounded-md tracking-wider
        border-2 border-[var(--dark-blue)]`}
      type={type}
    >
      {children}
    </button>
  );
}
