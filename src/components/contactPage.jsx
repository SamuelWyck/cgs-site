import "../styles/contactPage.css";
import "../assets/phone.svg";
import phoneImg from "../assets/phone.svg";
import emailImg from "../assets/email-multiple.svg";
import houseImg from "../assets/home-city.svg";



function ContactPage() {
    return (
        <main className="contact-page">
            <p className="contact-title">We want to help you</p>
            <div className="contact-tiles">
                <div className="contact-tile">
                    <img src={phoneImg} alt="phone" />
                    <p>414-867-5309</p>
                </div>
                <div className="contact-tile">
                    <img src={emailImg} alt="email" />
                    <p>info@cybergoosesystems.com</p>
                </div>
                <div className="contact-tile">
                    <img src={houseImg} alt="house" />
                    <p>123 Main Street, Anytown, CA 91234</p>
                </div>
            </div>
        </main>
    );
};



export default ContactPage;