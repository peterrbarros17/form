import Form from "./Form";
import NoticeComponent from "./NoticeComponent";
import TermsComponent from "./TermsComponent";

export default function FormSection() {
  return (
    <section className="flex flex-col w-2xl md:w-[800px] gap-4">
      <NoticeComponent />
      <div className="bg-white rounded-md p-4 flex flex-col gap-4 shadow-md shadow-[--dark-blue]">
        <Form />
        <TermsComponent />
      </div>
    </section>
  );
}
