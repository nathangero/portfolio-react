import { useEffect } from "react";
import ResumeButtons from "../components/ResumeButtons";
import Skills from "../components/Skills";

export default function Resume() {

  useEffect(() => {
    // Scroll window to top when going to this page
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <section className="bg-gray-800 text-white pt-3 pb-4 fit-screen">
        <h2 className="text-center text-4xl max-sm:text-3xl max-md:px-2">
          Here&apos;s my resume and a list of my skills
        </h2>

        <ResumeButtons />
        <br />
        <Skills />
      </section>
    </>
  )
}