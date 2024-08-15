import ResumeButtons from "../components/ResumeButtons";
import Skills from "../components/Skills";

export default function Resume() {

  return (
    <>
      <div className="bg-gray-800 text-white">
        <h2 className="text-center">
          Here&apos;s my resume and a list of my skills
        </h2>

        <ResumeButtons />

        <Skills />
      </div>
    </>
  )
}