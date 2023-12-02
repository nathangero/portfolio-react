import { Link } from 'react-router-dom';

export default function AboutMePage() {

    const styles = {
        profilePic: {
            "borderRadius": "100%",
            "height": "200px",
            "width": "200px",
            "objectFit": "cover",
            objectPosition: "50% 50%" /* centers image within constraints */
        }
    }

    return (
        <section className=" fs-4">
            <div className="d-flex justify-content-center">
                <img src="dist/selfie-aug23.jpg" style={styles.profilePic} />
            </div>

            <div id="about-me-text" className="p-3">
                <p>
                    I&apos;m a full stack iOS Developer based in the Bay Area. My specialties are in SwiftUI, Google Cloud Platform, Google Firebase, and NodeJS. I created and currently maintain iOS rideshare apps called Fijo Rideshare & Delivery and Fijo Driver. Currently, I&apos;m learning how to be a full-stack engineer using the following technologies: MongoDB, Express, React, NodeJS, GraphQL, and MySQL. I&apos;m learning through the UC Berkeley Extension course and hope to make a careers switch afterwards.
                </p>
                <br />
                <p>
                    In my freetime I like to try different food places around the Bay Area with my loving partner, hangout with my friends whether its through Discord or IRL, travel to see family, participate in my church activities/worship throughout the week, and improving my coding skills through personal projects or LeetCode/HackerRank practice.
                </p>
                <br />
                <p>
                    Please check out my work <Link className='text-primary' to={'/portfolio'}>here</Link> or contact me <Link className='text-primary' to={'/contact'}>here</Link>, and thank you for visiting!
                </p>
            </div>
        </section>
    )
}

