import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="about-title">About Taskit</h2>
                <p className="about-text">
                    At <strong>Taskit</strong>, we are passionate about delivering digital excellence. Our team of skilled developers, designers, and strategists work together to create innovative, scalable, and user-friendly solutions. From dynamic websites to robust applications, we ensure every project we undertake is tailored to meet your unique goals and vision.
                </p>
                <p className="about-text">
                    Whether you're a startup aiming to establish your presence or an established business looking to modernize, Taskit is your trusted partner for success. Let’s build something extraordinary together!
                </p>
                <div className="about-highlights">
                    <h3>Why Choose Taskit?</h3>
                    <ul>
                        <div className="liststyle">
                            <li>Expertise in cutting-edge technologies.</li>
                            <li>Tailored solutions for every client.</li>
                            <li>Responsive and user-centric designs.</li>
                            <li>Commitment to quality and innovation.</li>
                        </div>
                    </ul>
                </div>
                <div className="about-highlights">
                    <h3>Our Vision</h3>
                    <ul>

                        <li>
                            <p>At Taskit, our vision is to empower businesses and individuals with innovative digital solutions that inspire growth and transform ideas into impactful realities. We aim to be a global leader in full-stack development by consistently delivering cutting-edge, scalable, and user-focused solutions that make a difference.</p>
                        </li>
                    </ul>
                    <h3>Our Mission</h3>
                    <ul>
                        <li>

                            <p>Our mission is to empower businesses and individuals with innovative digital solutions that inspire growth and transform ideas into impactful realities. We aim to be a global leader in full-stack development by consistently delivering cutting-edge, scalable, and user-focused solutions that make a difference.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
