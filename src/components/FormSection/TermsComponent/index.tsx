import { termsText } from "@/data/mainText";

export default function TermsComponent() {
  return (
    <article className="text-center">
      <p className="text-[var(--dark-blue)]">{termsText.terms}</p>
      <a className="text-[var(--red)] font-semibold cursor-pointer">
        {termsText.termBtn}
      </a>
    </article>
  );
}
