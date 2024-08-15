import AboutMe from "../components/AboutMe";

export default function Home() {

  return (
    <>
      <section id="about-me" className="dark bg-gray-800 text-white pb-5">
        <AboutMe />
      </section>

      <section id="projects" className="min-h-lvh">
        <h2 className="text-4xl">Projects</h2>
      </section>
    </>
  )
}