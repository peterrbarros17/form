import { ButtonProps } from "@/types/types";

export default function ButtonSubmit({ children, type }: ButtonProps) {
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
