import { mainText } from "@/data/mainText";

export default function TextSection() {
  return (
    <header className="text-center md:text-center lg:text-left max-w-lg">
      <h1 className="font-bold text-[40px] mb-6 leading-10">
        {mainText.title}
      </h1>
      <p className="font-semibold">{mainText.paragraph}</p>
    </header>
  );
}
