import ResumeButtons from "../components/ResumeButtons";
import Skills from "../components/Skills";

export default function Resume() {

  return (
    <>
      <div className="bg-gray-800 text-white fit-screen">
        <h2 className="text-center text-4xl max-sm:text-2xl">
          Here&apos;s my resume and a list of my skills
        </h2>

        <ResumeButtons />

        <Skills />
      </div>
    </>
  )
}