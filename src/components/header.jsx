import "../styles/header.css";
import { Link } from "react-router-dom";
import HeaderMenu from "./headerMenu.jsx";
import logoImg from "../assets/logo_flag.png";



function Header() {
    return (
    <header>
        <Link to="/">
            <div className="banner">
                <div className="logo-wrapper">
                    <img src={logoImg} alt="goose" className="logo"/>
                </div>
                <p className="banner-title">
                    C<span className="long-title">yber </span>
                    <span className="short-title">.</span>
                    G<span className="long-title">oose </span>
                    <span className="short-title">.</span>
                    S<span className="long-title">ystems </span>
                    <span className="short-title">.</span>
                </p>
            </div>
        </Link>
        <HeaderMenu />
    </header>  
    );
};



export default Header;