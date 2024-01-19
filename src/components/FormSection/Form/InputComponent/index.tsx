import { InputProps } from "@/types/types";

export default function InputComponent(props: InputProps) {
  return (
    <fieldset>
      <input {...props} />
    </fieldset>
  );
}
