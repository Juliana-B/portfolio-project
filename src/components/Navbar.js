import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href={React}><span>La</span>bish</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href={React}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={React}>About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={React}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={React}>Contact me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
