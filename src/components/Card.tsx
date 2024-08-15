
export default function Card({ alt, description, link_deploy, image, name, link_repo }: CardProps) {

  return (
    <>
      <div className="rounded-xl border-2 border-white bg-gray-800 card-size flex flex-col">
        <img src={image} alt={alt} className="rounded-tl-lg rounded-tr-lg aspect-auto mx-auto project-image" />
        <hr />
        <div id="card-bottom" className="p-2 flex flex-col flex-grow">
          <p className="text-3xl text-center mb-3">{name}</p>
          <p className="text-center mb-5">{description}</p>
          <div className="flex justify-around mt-auto mb-2">
            {link_repo && (
              <a href={link_repo} target="_blank" className="rounded border bg-indigo-500 text-white px-3 py-2" rel="noreferrer">
                GitHub Repo
              </a>
            )}
            <a href={link_deploy} target="_blank" className="rounded border bg-indigo-500 text-white px-3 py-2" rel="noreferrer">
              Website
            </a>
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