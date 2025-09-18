import "../styles/homePage.css";
import planeImg from "../assets/plane.jpg";
import widePlaneImg from "../assets/plane-wide.jpeg";
import smallPlaneImg from "../assets/plane-small.jpg";
import logoImg from "../assets/logo_flag.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop.js";



function HomePage() {
    useEffect(function() {
        scrollToTop();
    }, []);

    return (
    <main className="homepage">
        <section className="hero">
            <picture>
                <source srcSet={widePlaneImg} media="(width >= 800px)"/>
                <source srcSet={planeImg} media="(width >= 600px)"/>
                <img src={smallPlaneImg} alt="plane" />
            </picture>
            <div className="tagline-wrapper">
                <p className="tagline">
                    Guarding the flock one byte at time
                </p>
            </div>
        </section>
        <section className="quote-section">
            <div className="quote-wrapper">
                <p className="quote">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Illum vero ipsum fugit doloremque eius odit optio eligendi rerum sequi neque, 
                    sunt odio dolore illo eveniet exercitationem impedit, eos corrupti consequatur!
                </p>
            </div>
        </section>
        <section className="services-section">
            <img className="services-background-img" src={logoImg} alt="" />
            <div className="services-alert-wrapper">
                <p className="services-alert">Have a problem? We have solutions!</p>
                <Link to="/services">See our services</Link>
            </div>
        </section>
        <section className="mission-statement-section">
            <div className="shapes">
                <div className="boxy-slice"></div>
            </div>
            <p className="mission-statement">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quos quasi soluta molestiae, quo labore aut, vero eos ipsam enim, 
                doloremque sit ut possimus repellendus aspernatur incidunt voluptas. 
                Obcaecati, exercitationem repudiandae!
            </p>
        </section>
    </main>
    );
};



export default HomePage;