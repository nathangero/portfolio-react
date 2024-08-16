import Card from "./Card";
import ProjectData from "../assets/projects.json";

export default function Projects() {

  return (
    <>
      <h2 className="text-4xl max-md:text-3xl text-center mb-4">A list of projects I'm proud of!</h2>

      <div className="flex justify-center">
        <div className="grid auto-cols-auto md:grid-cols-2 xl:grid-cols-3 gap-0 grid-wrapper">
          {ProjectData.map((project, index) => {
            return (
              <div key={index} className="m-3">
                <Card {...project} />
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  )
}