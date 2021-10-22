import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-scroll'
import {Link as UseLink} from 'react-router-dom'
import "./Navbar.css";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar fixed-top">
                <div className="container ">
                    <a className="navbar-brand" href={React}><span>La</span>bish</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"> 
                                <UseLink to= '/' className="nav-link" smooth={false} duration={1000} >Home</UseLink>
                            </li>
                            <li className="nav-item">
                                <Link to = 'about' className="nav-link" smooth={true} duration={1000} >About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = 'services' className="nav-link" smooth={true} duration={1000} >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = 'contact' className="nav-link" smooth={true} duration={1000} >Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
