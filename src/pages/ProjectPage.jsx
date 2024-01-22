import ProjectData from "/src/assets/projects.json";
import ProjectCard from '../components/ProjectCard'

export default function ProjectPage() {
    const projects = ProjectData.map((project, index) => <li key={index} className="col-lg-3 m-3"><ProjectCard project={project} /></li> )

    return (
        <section className="w-100">
            <h2 className="text-center project-title">A list of my projects I&apos;m proud of!</h2>

            <ul className="list-unstyled row d-flex justify-content-center">{projects}</ul>
        </section>
    )
}