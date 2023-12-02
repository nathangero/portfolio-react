// import { useMediaQuery } from 'react-responsive'

export default function ResumePage() {

    const styles = {
        button: {
            "backgroundColor": "#2baeff",
            "color": "white"
        }
    }

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
        return <li key={index} className="list-group-item">{skill}</li>
    })
    const backendItems = skills.backend.map((skill, index) => {
        return <li key={index} className="list-group-item">{skill}</li>
    })
    const miscItems = skills.misc.map((skill, index) => {
        return <li key={index} className="list-group-item">{skill}</li>
    })


    const onClickDownloadResume = () => {
        console.log("@onClickDownloadResume")

        const resumePath = "/images/nathan_resume.pdf";
        const tempLink = document.createElement("a"); // Create a clickable element
        tempLink.href = resumePath;
        tempLink.download = "Nathan's Resume.pdf"; // Set name for file

        document.body.appendChild(tempLink);
        tempLink.click(); // Activate the download link
        document.body.removeChild(tempLink); // Remove the element
    };

    return (
        <section className="m-3">
            <h2 className='text-center'>Below you&apos;ll find a download link to my resume and a list of my skills</h2>
            <br/>
            <div className="text-center">
                <button className="btn" style={styles.button} type="button" onClick={onClickDownloadResume}>Download My Resume</button>
            </div>

            <br/><br/>

            <div className="text-center">
                <h3 className="text-decoration-underline fs-2">Skills</h3>
            </div>
            
            <br/>

            <div className='row'>
                <div className='col-sm'>
                    <h4>Front-End:</h4>
                    <ul className="list-group mb-3">
                        {frontendItems}
                    </ul>
                </div>

                <div className='col-sm'>
                    <h4>Back-End:</h4>
                    <ul className="list-group mb-3">
                        {backendItems}
                    </ul>
                </div>

                <div className='col-sm'>
                    <h4>Misc:</h4>
                    <ul className="list-group">
                        {miscItems}
                    </ul>
                </div>
            </div>
        </section>
    )
}