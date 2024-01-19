import { formText } from "@/data/mainText";

export default function NoticeComponent() {
  return (
    <aside className="bg-[var(--blue)] text-center p-4 font-semibold rounded-md shadow-md shadow-[var(--dark-blue)]">
      <a className="cursor-pointer">{formText.warning}</a>
    </aside>
  );
}
