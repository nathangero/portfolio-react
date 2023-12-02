

export default function ProjectCard(props) {

    const project = props.project;

    return (
        <div className="card w-25">
            <img src={project.image} className="card-img-top" alt={project.alt} />
            <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>
                <p className="card-text text-center">{project.description}</p>

                <div className="d-flex justify-content-evenly">
                    <a target="_blank" href={project.deploy_link} className="btn btn-primary">Website</a>
                    <a target="_blank" href={project.repo_link} className="btn btn-primary">Code Repo</a>
                </div>
            </div>
        </div>
    )
}