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
                <img src="/images/selfie-aug23.jpg" style={styles.profilePic} alt="nathan's face profile picture"/>
            </div>
            
            <div id="about-me-text" className="p-3">
                <p>
                    I&apos;m a full stack iOS and MERN web developer based in the Bay Area. My specialties are React, SwiftUI, Express.js, MySQL, MongoDB, REST api, GraphQL, Firebase, and Google Cloud Platform. I created and currently maintain iOS rideshare apps called <a target="_blank" href="https://apps.apple.com/us/app/fijo-rideshare-delivery/id1545438502" rel="noreferrer">Fijo Rideshare & Delivery</a> and <a target="_blank" href="https://apps.apple.com/us/app/fijo-driver/id1545438729" rel="noreferrer">Fijo Driver</a>. In Dec 2023, I just finished a coding bootcamp through UC Berkeley Extension on learning how to be a full-stack MERN web developer using the following technologies: MongoDB, Express, React, Node.js, REST, GraphQL, and MySQL.
                </p>
                <br />
                <p>
                    In my freetime I like to try different food places around the Bay Area with my loving partner, hangout with my friends whether its through Discord or IRL, travel to see family, participate in my church activities/worship throughout the week, and improving my coding skills through personal projects or LeetCode/HackerRank practice.
                </p>
                <br />
                <p>
                    Please check out my work <Link className='text-primary' to={'/projects'} >here</Link> or contact me <Link className='text-primary' to={'/contact'}>here</Link>, and thank you for visiting!
                </p>
            </div>
        </section>
    )
}

