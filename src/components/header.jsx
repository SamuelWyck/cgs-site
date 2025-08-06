import "../styles/header.css";
import { Link } from "react-router-dom";
import gooseImg from "../assets/goose.png";



function Header() {
    return (
    <header>
        <Link to="/">
            <div className="banner">
                <div className="logo-wrapper">
                    <img src={gooseImg} alt="goose" className="logo"/>
                </div>
                <p className="banner-title">
                    C<span className="long-title">yber</span>
                    <span className="short-title">.</span>
                    G<span className="long-title">oose</span>
                    <span className="short-title">.</span>
                    S<span className="long-title">ystems</span>
                    <span className="short-title">.</span>
                </p>
            </div>
        </Link>
        <nav>
            <Link to="/#">About us</Link>
        </nav>
    </header>
    );
};



export default Header;