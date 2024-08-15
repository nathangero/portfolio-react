
export default function Card({ project }: CardProps) {

  return (
    <>
      <div className="rounded border bg-gray-800">
        <img src={project.image} alt="" className="h-32 w-auto mx-auto" />
        <hr />
        <div id="card-bottom" className="p-3">
          <div className="flex justify-around">
            <button className="rounded border bg-indigo-500 text-white px-3 py-2">GitHub Repo</button>
            <button className="rounded border bg-indigo-500 text-white px-3 py-2">Website</button>
          </div>
          < br />
          <p className="text-center">Project Description</p>
        </div>
      </div>
    </>
  )
}

interface CardProps {
  project: object;
}

interface Project {
  [key: string]: any;
}