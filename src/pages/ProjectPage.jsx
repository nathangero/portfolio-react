import ProjectData from "/src/assets/projects.json";
import ProjectCard from '../components/ProjectCard.jsx'

export default function ProjectPage() {
    const projects = ProjectData.map((project, index) => <li key={index}><ProjectCard project={project} /></li> )

    return (
        <section>
            <h2 className="text-center">Here&apos;s a list of projects I&apos;m proud of!</h2>

            <ul className="list-unstyled">{projects}</ul>
        </section>
    )
}