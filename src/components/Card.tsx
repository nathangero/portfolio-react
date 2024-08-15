
export default function Card({ alt, description, link_deploy, image, name, link_repo }: CardProps) {

  return (
    <>
      <div className="rounded border bg-gray-800">
        <img src={image} alt={alt} className="h-32 w-auto mx-auto" />
        <hr />
        <div id="card-bottom" className="p-2">
          <p className="text-3xl text-center mb-3">{name}</p>
          <p className="text-center">{description}</p>
          <div className="flex justify-around my-2">
            <a href={link_repo} target="_blank" className="rounded border bg-indigo-500 text-white px-3 py-2" rel="noreferrer">GitHub Repo</a>
            <a href={link_deploy} target="_blank" className="rounded border bg-indigo-500 text-white px-3 py-2" rel="noreferrer">Website</a>
          </div>
        </div>
      </div>
    </>
  )
}

interface CardProps {
  alt: string;
  description: string;
  link_deploy: string;
  image: string;
  name: string;
  link_repo: string;
}