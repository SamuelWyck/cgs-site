import "../styles/headerMenu.css";
import menuImg from "../assets/menu.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";



function HeaderMenu() {
    useEffect(function() {  
        function callBack(event) {
            const wrongElement = event.target.matches(".menu-drop-down") ||
            (event.target.matches(".menu-btn") || event.target.matches(".menu-img"));
            if (wrongElement) {
                return;
            }

            const menuDropDown = document.querySelector("nav.menu-drop-down");
            menuDropDown.classList.add("hidden");
        };

        document.addEventListener("click", callBack);
        
        window.addEventListener("resize", function() {
            const width = window.innerWidth;

            if (width > 500) {
                const menuDropDown = document.querySelector("nav.menu-drop-down");
                menuDropDown.classList.add("hidden");
            }
        });
        return document.removeEventListener("click", callBack);
    }, []);
    
    
    function handleClick() {
        document.querySelector("nav.menu-drop-down").classList.toggle("hidden");
    };


    return (
        <>
        <button onClick={handleClick} className="menu-btn">
            <img className="menu-img" src={menuImg} alt="menu" />
        </button>
        <nav className="menu-drop-down hidden">
            <Link to="/#">Services</Link>
            <Link to="/#">About us</Link>
        </nav>
        <nav className="header-nav">
            <Link to="/#">Services</Link>
            <Link to="/#">About us</Link>
        </nav>
        </>
    );
};



export default HeaderMenu;