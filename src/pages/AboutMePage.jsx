import { Link } from "react-router-dom";

export default function AboutMePage() {
  const EMAIL = "nathanageronimo@gmail.com";

  const styles = {
    profilePic: {
      borderRadius: "100%",
      height: "200px",
      width: "200px",
      objectFit: "cover",
      objectPosition: "50% 50%" /* centers image within constraints */,
      margin: "10px",
    },
  };

  return (
    <section className=" fs-4">
      <div className="d-flex flex-column align-items-center">
        <img
          src="/images/selfie-aug23.jpg"
          style={styles.profilePic}
          alt="nathan's face profile picture"
        />

        <h1 className="fs-3">Nathan Geronimo | Software Engineer</h1>
      </div>

      <div id="about-me-text" className="p-3">
        <p>
          I&apos;m an experienced full-stack developer with over 4 years specializing in iOS development, and certified in full-stack
          web development with a focus on the MERN stack. The technologies I specialize i are Swift/SwiftUI, React.js, Express.js, MySQL, MongoDB,
          RESTful api, GraphQL, Firebase, and Google Cloud Platform. I created the iOS rideshare apps called <b>Fijo Ridshare & Delivery</b> and <b>Fijo Driver</b>
          {/* <a
            target="_blank"
            href="https://apps.apple.com/us/app/fijo-rideshare-delivery/id1545438502"
            rel="noreferrer"
          >
            Fijo Rideshare & Delivery
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/fijo-driver/id1545438729"
            rel="noreferrer"
          >
            Fijo Driver
          </a> */}
          . In Dec 2023, I just finished a coding bootcamp through UC Berkeley
          Extension on learning how to be a full-stack MERN web developer using
          the following technologies: MongoDB, Express, React.js, Node.js, RESTful Api,
          GraphQL, and MySQL.
        </p>

        <p>
          In my freetime I like to try different food places around the Bay Area
          with my loving partner, hangout with my friends whether its through
          Discord or IRL, travel to see family, participate in my church
          activities/worship throughout the week, and always thinking of my next passion project.
        </p>

        <p>
          Please check out my work{" "}
          <Link className="text-primary" to={"/projects"}>
            here{" "}
          </Link>
          {/* or contact me{" "}
          <Link className="text-primary" to={"/contact"}>
            here
          </Link> */}
          and thank you for visiting!
        </p>

        <div className="recent-work">
          <p>
            In fact, check out my most recent project,  <a target="_blank" href="https://rock-paper-scissor-go.firebaseapp.com/" rel="noreferrer" ><b>Rock, Paper, Scissors Go!</b></a>
            <br />
            You can play Rock, Paper, Scissors online with anyone! It&apos;s designed to allow anyone play, whether they have an account or not.
            You can play with random players, or make a private lobby and invite someone you know.
            <br />
          </p>

          <label>The technologies used are:</label>
          <ul>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>Google Firebase</li>
          </ul>
        </div>

        <label>-----</label>
        <p>
          You can contact me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
