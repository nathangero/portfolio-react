// import { useMediaQuery } from 'react-responsive'

export default function ResumePage() {
  const styles = {
    button: {
      backgroundColor: "#2baeff",
      color: "white",
    },
  };

  const SKILLS = {
    frontend: [
      "Swift",
      "SwiftUI",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "jQuery",
      "Handlebars.js",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful Api",
      "MySQL",
      "Sequelize (ORM)",
      "NoSQL",
      "MongoDB",
      "Mongoose (ODM)",
      "Apollo GraphQL",
      "JWT",
    ],
    misc: [
      "Git",
      "GitHub Actions",
      "Google Firebase",
      "MERN stack",
      "Heroku",
      "MVVM architecture",
      "MVC architecture",
    ]
    ,
  };

  const FRONTEND_ITEMS = SKILLS.frontend.map((skill, index) => {
    return (
      <li key={index} className="list-group-item">
        {skill}
      </li>
    );
  });
  const BACKEND_ITEMS = SKILLS.backend.map((skill, index) => {
    return (
      <li key={index} className="list-group-item">
        {skill}
      </li>
    );
  });
  const MISC_ITEMS = SKILLS.misc.map((skill, index) => {
    return (
      <li key={index} className="list-group-item">
        {skill}
      </li>
    );
  });

  const GOOGLE_DRIVE_ID = "1_viEtvupcaMoGpP5IhfqBNGa65fml7Rp";
  const RESUME_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_ID}/view?usp=drive_link`;

  const onClickDownloadResume = () => {
    const downloadLink = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_ID}`;

    const tempLink = document.createElement("a"); // Create a clickable element
    tempLink.href = downloadLink;
    tempLink.download = "Nathan's Resume.pdf"; // Set name for file

    document.body.appendChild(tempLink);
    tempLink.click(); // Activate the download link
    document.body.removeChild(tempLink); // Remove the element
  };

  return (
    <section className="m-3">
      <h2 className="text-center">
        Here&apos;s my resume and a list of my skills
      </h2>
      <br />
      <div className="d-flex justify-content-center">
        <a
          target="_blank"
          href={RESUME_URL}
          rel="noreferrer"
          className="btn mx-2"
          style={styles.button}
          type="button"
        >
          View My Resume
        </a>
        <button
          className="btn mx-2"
          style={styles.button}
          type="button"
          onClick={onClickDownloadResume}
        >
          Download My Resume
        </button>
      </div>

      <br />
      <br />

      <div className="text-center">
        <h3 className="text-decoration-underline fs-2">Skills</h3>
      </div>

      <br />

      <div className="row">
        <div className="col-sm">
          <h4>Frontend:</h4>
          <ul className="list-group mb-3">{FRONTEND_ITEMS}</ul>
        </div>

        <div className="col-sm">
          <h4>Backend:</h4>
          <ul className="list-group mb-3">{BACKEND_ITEMS}</ul>
        </div>

        <div className="col-sm">
          <h4>Misc:</h4>
          <ul className="list-group">{MISC_ITEMS}</ul>
        </div>
      </div>
    </section>
  );
}
