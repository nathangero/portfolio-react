import { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";

export default function ProjectCard(props) {
  const project = props.project;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card project-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="project-image">
        <img src={project.image} className={`card-img-top ${isHovered ? "show" : ""}`} alt={project.alt} />
        <div className={`d-flex justify-content-around project-button-container`}>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.repo_link}
            className={`btn project-button repo ${isHovered ? "show" : ""}`}
          >
            Code Repo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.deploy_link}
            className={`btn project-button website ${isHovered ? "show" : ""}`}
          >
            Website
          </a>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{project.name}</h5>
        <p className="card-text text-center">{project.description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    deploy_link: PropTypes.string,
    repo_link: PropTypes.string,
  }),
};
