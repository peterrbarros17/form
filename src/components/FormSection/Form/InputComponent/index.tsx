import { InputHTMLAttributes } from "react";

type InputProps = {
  placeholder: string;
  required?: boolean;
  type: string;
  name: string;
  id: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputComponent(props: InputProps) {
  return (
    <fieldset>
      <input {...props} />
    </fieldset>
  );
}
