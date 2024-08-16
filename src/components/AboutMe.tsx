
export default function AboutMe() {
  const EMAIL = "nathanageronimo@gmail.com";

  /**
   * Calcuate the amount of years that have passed since I started programming professionally
   * @returns Number of years that have passed.
   */
  const calcYears = (): number => {
    const today = new Date();
    const startDate = new Date('2019-09-01'); // Start date in September 2019
    let yearsPassed = today.getFullYear() - startDate.getFullYear();

    // Adjust for months if the start date month is later in the year than today
    if (today.getMonth() < startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())) {
      yearsPassed--;
    }

    return yearsPassed;
  }

  return (
    <>
      <br />
      <div id="about-me-text" className="text-3xl max-sm:text-2xl leading-snug mx-auto px-52 max-sm:p-3 max-lg:px-20">
        <p>
          I have over {calcYears()} years of experience in developing robust applications using Swift, React, and Node.js. I specialize in iOS development using SwiftUI, I hold a certificate in full-stack web development using React, Node.js, Express.js, and MongoDB, and I'm currently working on my own video game using the GameMaker engine.
        </p>

        <br />
        <div id="notable-work" className="text-center">
          <label className="underline underline-offset-4">Notable Work</label>
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