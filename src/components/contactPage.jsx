import "../styles/contactPage.css";
import "../assets/phone.svg";
import phoneImg from "../assets/phone.svg";
import emailImg from "../assets/email-multiple.svg";
import houseImg from "../assets/home-city.svg";



function ContactPage() {
    return (
        <main className="contact-page">
            <title>CGS: Contact us</title>
            <p className="contact-title">Contact us</p>
            <div className="contact-tiles">
                <div className="contact-tile phone">
                    <div className="phone-wrapper">
                    <img src={phoneImg} alt="phone" />
                    <p>414-867-5309</p>
                    </div>
                    <p>9am-5pm EST Monday-Friday</p>
                </div>
                <div className="contact-tile email">
                    <img src={emailImg} alt="email" />
                    <p>info@cybergoosesystems.com</p>
                </div>
                <div className="contact-tile address">
                    <img src={houseImg} alt="house" />
                    <p>123 Main Street, Anytown, CA 91234</p>
                </div>
            </div>
        </main>
    );
};



export default ContactPage;