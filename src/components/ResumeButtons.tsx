
export default function ResumeButtons() {

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

      <br />
      <div className="flex max-sm:flex-col items-center max-w-fit mx-auto">
        <a
          target="_blank"
          href={RESUME_URL}
          rel="noreferrer"
          className="flex justify-center rounded bg-indigo-500 text-center text-xl p-2 mx-3 my-2"
          type="button"
        >
          View My Resume
        </a>
        <button
          className="flex justify-center rounded bg-indigo-500 text-center text-xl p-2 mx-3 my-2"
          type="button"
          onClick={onClickDownloadResume}
        >
          Download My Resume
        </button>
      </div>
    </>
  )
}