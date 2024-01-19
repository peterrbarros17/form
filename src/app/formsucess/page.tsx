import Link from "next/link";
import { formSucess } from "@/data/mainText";

export default function FormSucess() {
  return (
    <div className="bg-[var(--red)] w-full h-screen flex flex-col justify-center items-center">
      <div className="text-white h-52 w-72 flex flex-col text-center rounded-md overflow-auto  tracking-wide">
        <div className="h-full flex items-center justify-center bg-[var(--green)] ">
          <p className="text-xl">{formSucess.sucess}</p>
        </div>
        <Link
          href="/"
          className="text-2xl flex items-center justify-center h-1/3 bg-[var(--dark-blue)]"
        >
          <p>Continue</p>
        </Link>
      </div>
    </div>
  );
}
