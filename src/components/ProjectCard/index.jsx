import "./style.css";
import PropTypes from "prop-types";

export default function ProjectCard(props) {
    const project = props.project;

    return (
        <div className="card project-card" >
            <div className="project-image">
                <img src={project.image} className="card-img-top" alt={project.alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>
                <p className="card-text text-center">{project.description}</p>

                <div className="d-flex justify-content-around">
                    <a target="_blank" rel="noreferrer" href={project.repo_link} className="btn btn-primary project-button">Code Repo</a>
                    <a target="_blank" rel="noreferrer" href={project.deploy_link} className="btn btn-primary project-button">Website</a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string,
        alt: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        deploy_link: PropTypes.string,
        repo_link: PropTypes.string,
    })
}