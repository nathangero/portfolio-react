

export default function ResumePage() {
    

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
        <div>
            <button className="btn btn-primary" type="button" onClick={ onClickDownloadResume }>Download My Resume</button>

            list of skills
        </div>
    )
}