import AboutMe from "../components/AboutMe";
import HeroBanner from "../components/HeroBanner";
import Projects from "../components/Projects";

export default function Home() {

  return (
    <>
      <HeroBanner />

      <section id="about-me" className="dark bg-gray-800 text-white pb-5">
        <AboutMe />
      </section>

      <section id="projects" className="dark bg-slate-600 text-white pb-5">
        <Projects />
      </section>
    </>
  )
}