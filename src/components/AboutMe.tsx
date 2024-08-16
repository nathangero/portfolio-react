
export default function AboutMe() {
  const EMAIL = "nathanageronimo@gmail.com";

  return (
    <>
      <img
        id="profile-picture"
        src="/images/selfie-aug23.jpg"
        className="rounded-full h-48 w-48 mx-auto object-cover object-center p-2"
        alt="nathan's face profile picture"
      />

      <h1 className="text-center text-5xl font-bold">Nathan Geronimo | Software Engineer</h1>
      <br />

      <div id="about-me-text" className="text-3xl text-gray-50 max-sm:text-2xl leading-snug mx-auto px-52 max-sm:p-3 max-lg:px-20">
        <p>
          I&apos;m a software engineer with 4+ years of experience in developing robust applications using Swift, React, and Node.js. I specialize in iOS development using SwiftUI, I hold a certificate in full-stack web development using React, Node.js, Express.js, and MongoDB, and I'm currently working on my own video game using the GameMaker engine.
        </p>
        <p className="text-center underline underline-offset-8 mt-4">
          I'm open to remote or on-site/hybrid work in the San Francisco Bay Area.
        </p>

        <br />
        <div id="notable-work" className="text-center">
          <label className="font-semibold">Notable Work</label>
          <ul className="list-disc text-left ml-10">
            <li>
              Between September-December 2019, I built the first working prototype of iOS rideshare apps Fijo Ridshare & Delivery and Fijo Driver, which were officially released the following year. The apps were built fully using the SwiftUI framework.
            </li>
            <li>
              Learned how to use multiple 3rd party APIs such as PayPal, HERE, Google Maps API, GeoFire, Checkr, and Veriff.
            </li>
            <li>
              Co-designed the NoSQL databases for the Fijo platform, and SQL in other personal/bootcamp projects.
            </li>
            <li>
              In December 2023, I earned a certificate in full stack web development from UC Berkeley Extension. It was an intense 3 month program where I worked on projects individually and in groups every single week. The curriculum focused on HTML5, CSS3, JavaScript, jQuery, Handlebars.js, Bootstrap, React.js, Redux, Node.js, Express.js, RESTful APIs, GraphQL, MySQL, and MongoDB.
            </li>
          </ul>
        </div >

        <div className="recent-work">
          <br />
          <p>
            Check out my most recent project:&nbsp;
            <a target="_blank" href="https://rock-paper-scissor-go.firebaseapp.com/" rel="noreferrer" className="text-blue-500">
              <b>Rock, Paper, Scissors Go!</b>
            </a>
            <p>
              You can play Rock, Paper, Scissors online with anyone! It&apos;s designed where anyone play, whether they have an account or not. You can play with random players in "for fun" or in "ranked", or make a private lobby and play with a friend.
            </p>

            <div>
              <label>The technologies used are:</label>
              <ul className="list-disc text-left ml-10">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Bootstrap</li>
                <li>Google Firebase</li>
              </ul>
            </div>
          </p>

          <br />
          <p className="personal-note">
            In my freetime I like to try different food places around the Bay Area
            with my loving partner, hangout with my friends whether its through
            Discord or IRL, travel to see family, participate in my church
            activities/worship throughout the week, and always thinking of my next passion project.
          </p>

          <br />
          <div className="text-center">
            <label>----------------</label>
            <p>
              You can contact me at <a href={`mailto:${EMAIL}`} className="max-md:text-xl text-blue-500"><b>{EMAIL}</b></a>
            </p>
          </div>
        </div>
      </div >
    </>
  )
}