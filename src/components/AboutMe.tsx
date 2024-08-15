
export default function AboutMe() {

  return (
    <>
      <img
        id="profile-picture"
        src="/images/selfie-aug23.jpg"
        className="rounded-full h-48 w-48 mx-auto object-cover object-center p-2"
        alt="nathan's face profile picture"
      />

      <h1 className="text-center text-4xl">Nathan Geronimo | Software Engineer</h1>
      <br />

      <div id="about-me-text" className="text-3xl leading-snug mx-auto max-w-5xl">
        <p>
          I&apos;m an experienced full-stack developer with over 4 years specializing in iOS development, and certified in full-stack
          web development with a focus on the MERN stack. The technologies I specialize i are Swift/SwiftUI, React.js, Express.js, MySQL, MongoDB,
          RESTful api, GraphQL, Firebase, and Google Cloud Platform. I created the iOS rideshare apps called Fijo Ridshare & Delivery and Fijo Driver
          . In Dec 2023, I just finished a coding bootcamp through UC Berkeley
          Extension on learning how to be a full-stack MERN web developer using
          the following technologies: MongoDB, Express, React.js, Node.js, RESTful Api,
          GraphQL, and MySQL.
        </p>

        <br />
        <p>
          In my freetime I like to try different food places around the Bay Area
          with my loving partner, hangout with my friends whether its through
          Discord or IRL, travel to see family, participate in my church
          activities/worship throughout the week, and always thinking of my next passion project.
        </p>

        <div className="recent-work">
          <br />
          <p>
            Check out my most recent project,  <a target="_blank" href="https://rock-paper-scissor-go.firebaseapp.com/" rel="noreferrer" ><b>Rock, Paper, Scissors Go!</b></a>
            <br />
            You can play Rock, Paper, Scissors online with anyone! It&apos;s designed where anyone play, whether they have an account or not. You can play with random players in "for fun" or in "ranked", or make a private lobby and play with a friend.
            <br />
          </p>

          <label>The technologies used are:</label>
          <ul className="list-disc ml-14">
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>Google Firebase</li>
          </ul>
        </div>
      </div>
    </>
  )
}