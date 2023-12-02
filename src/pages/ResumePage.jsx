

export default function ResumePage() {


    const skills = {
        frontend: [
            "ReactJS",
            "CSS",
            "Bootstrap",
            "SwiftUI"
        ],
        backend: [
            "Express",
            "MySQL",
            "Sequelize (ORM)",
            "NoSQL",
            "MongoDB",
            "Mongoose (ORM)",
        ],
        misc: [
            "MERN",
            "MVVM",
            "MVC",
            "Google Firebase",
            "Xcode",
        ]
    }


    const frontendItems = skills.frontend.map((skill, index) => {
        return <li key={index}>{skill}</li>
    })
    const backendItems = skills.backend.map((skill, index) => {
        return <li key={index}>{skill}</li>
    })
    const miscItems = skills.misc.map((skill, index) => {
        return <li key={index}>{skill}</li>
    })


    const onClickDownloadResume = () => {
        console.log("@onClickDownloadResume")

        const resumePath = "src/assets/nathan_resume.pdf";
        const tempLink = document.createElement("a"); // Create a clickable element
        tempLink.href = resumePath;
        tempLink.download = "Nathan's Resume.pdf"; // Set name for file

        document.body.appendChild(tempLink);
        tempLink.click(); // Activate the download link
        document.body.removeChild(tempLink); // Remove the element
    };

    return (
        <section className="m-3">
            <h2>Below you&apos;ll find a download link to my resume and a list of my skills</h2>
            <div className="text-center">
                <button className="btn btn-primary" type="button" onClick={onClickDownloadResume}>Download My Resume</button>
            </div>

            <br /><br />

            <div className="text-center">
                <h3 className="text-decoration-underline fs-2">Skills</h3>
            </div>

            <h4>Front-End:</h4>
            <ul>
                {frontendItems}
            </ul>

            <h4>Back-End:</h4>
            <ul>
                {backendItems}
            </ul>
            
            <h4>Misc:</h4>
            <ul>
                {miscItems}
            </ul>
        </section>
    )
}