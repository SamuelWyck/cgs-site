import "../styles/homePage.css";
import planeImg from "../assets/plane.jpg";
import widePlaneImg from "../assets/plane-wide.jpeg";
import smallPlaneImg from "../assets/plane-small.jpg";



function HomePage() {
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
                    Security where it matters, when it matters. - CGS
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