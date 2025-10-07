import "../styles/serviceCard.css";
import { useRef } from "react";



function ServiceCard({service}) {
    const serviceBullets = useRef(getServiceBullets(service));


    function getServiceBullets(service) {
        const bullets = [];
        for (let bullet of service.bulletPoints) {
            bullets.push(
                <li className="service-bullet" key={bullet.title}>
                    {/* <p className="bullet-title">{bullet.title}</p> */}
                    <p className="bullet-info">{bullet.description}</p>
                </li>
            );
        }
        return bullets;
    };


    return (
    <div className="service-card">
        <div className="service-name">
            <p className="service-title">{service.title}</p>
            <div className="service-img-wrapper">
                <img src={service.img} alt="" />
            </div>
        </div>
        <ul className="service-bullet-points">
            {serviceBullets.current}
        </ul>
    </div>  
    );
};



export default ServiceCard;