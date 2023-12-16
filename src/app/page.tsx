import FormSection from "@/components/FormSection";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24 md:p-24 bg-[var(--red)] text-white transition-all duration-300 ease-in">
      <div className="z-10 max-w-5xl w-full items-center justify-between gap-10 flex flex-col md:flex-col lg:flex-row tracking-wider">
        <TextSection />
        <FormSection />
      </div>
    </main>
  );
}
