
export default function HeroBanner() {


  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat w-auto bg-gray-900" >
        <div className="relative container mx-auto px-4 py-10 flex flex-col items-center justify-center h-full text-center text-white">
          <img
            id="profile-picture"
            src="/images/selfie-aug23.jpg"
            className="rounded-full h-48 w-48 mx-auto object-cover object-center p-2"
            alt="nathan's face profile picture"
          />
          <h1 className="text-center text-5xl">Nathan Geronimo | Software Engineer</h1>
          <h2 className="text-center text-4xl font-bold mt-4">
            Open to Work!
          </h2>
        </div>
      </section>
    </>
  )
}