import { frontend, backend, misc } from "../assets/skills.json";

export default function Skills() {

  const FRONTEND_ITEMS = frontend.map((skill, index) => {
    return (
      <li key={index} className="list-group-item">
        {skill}
      </li>
    );
  });
  const BACKEND_ITEMS = backend.map((skill, index) => {
    return (
      <li key={index} className="list-group-item">
        {skill}
      </li>
    );
  });
  const MISC_ITEMS = misc.map((skill, index) => {
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
    <>
      <section className="pt-3">
        <h2 className="text-center">
          Here&apos;s my resume and a list of my skills
        </h2>
        <br />
        <div className="flex justify-center">
          <a
            target="_blank"
            href={RESUME_URL}
            rel="noreferrer"
            className="btn mx-2"
            type="button"
          >
            View My Resume
          </a>
          <button
            className="btn mx-2"
            type="button"
            onClick={onClickDownloadResume}
          >
            Download My Resume
          </button>
        </div>

        <br />
        <br />

        <div className="text-center">
          <h3 className="underline text-2xl">Skills</h3>
        </div>

        <br />

        <div className="flex flex-wrap">
          <div className="sm:w-1/3 w-full">
            <h4>Frontend:</h4>
            <ul className="list-disc mb-3">{FRONTEND_ITEMS}</ul>
          </div>

          <div className="sm:w-1/3 w-full">
            <h4>Backend:</h4>
            <ul className="list-disc mb-3">{BACKEND_ITEMS}</ul>
          </div>

          <div className="sm:w-1/3 w-full">
            <h4>Misc:</h4>
            <ul className="list-disc">{MISC_ITEMS}</ul>
          </div>
        </div>
      </section>

    </>
  )
}