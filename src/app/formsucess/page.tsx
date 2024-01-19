import Link from "next/link";
import { formSucess } from "@/data/mainText";

export default function FormSucess() {
  return (
    <div className="bg-[var(--red)] w-full h-screen flex gap-5 flex-col justify-center items-center">
      <p className="text-4xl text-white">{formSucess.sucess}</p>
      <p className="text-4xl text-white">{formSucess.thx}</p>
      <Link href="/" className="text-4xl underline">
        Home
      </Link>
    </div>
  );
}
