import "../styles/servicePage.css";
import serviceData from "../data/servicesData.js";
import ServiceCard from "./serviceCard.jsx";
import { useRef } from "react";



function ServicePage() {
    const serviceCards = useRef(getServiceCards(serviceData));


    function getServiceCards(services) {
        const serviceCards = [];
        for (let service of services) {
            serviceCards.push(
                <ServiceCard service={service} key={service.title} />
            );
        }
        return serviceCards;
    };


    return (
    <>
    <title>CGS: Services</title>
    <main className="service-page">
        <p className="service-page-title">Services we offer</p>
        <div className="services">
            {serviceCards.current}
        </div>
    </main>
    </>
    );
};



export default ServicePage;