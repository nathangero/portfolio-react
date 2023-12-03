

export default function ProjectCard(props) {

    const project = props.project;

    const styles = {
        image: {
            objectFit: "cover",
            height: "100%",
        },
        card: {
            height: "100%",
        },
        button: {
            "backgroundColor": "#2baeff",
            "color": "white"
        }
    }

    return (
        <div className="card" style={styles.card}>
            <div className="card-img-container" style={styles.image}>
                <img src={project.image} className="card-img-top" alt={project.alt} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>
                <p className="card-text text-center">{project.description}</p>

                <div className="d-flex justify-content-around">
                    <a target="_blank" rel="noreferrer" href={project.deploy_link} className="btn btn-primary" style={styles.button}>Website</a>
                    <a target="_blank" rel="noreferrer" href={project.repo_link} className="btn btn-primary" style={styles.button}>Code Repo</a>
                </div>
            </div>
        </div>
    )
}