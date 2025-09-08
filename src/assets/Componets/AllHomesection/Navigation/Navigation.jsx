import React, { useState } from 'react'
import './Navigaiton.css'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";


function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    const NavigationData = [
        { title: "About", Path: "/about" },
        { title: "Clients", Path: "/clients" },
        { title: "Service", Path: "/service" },
        { title: "Contact", Path: "/contact" }
    ]

    return (
        // <div className="sectionpadding">
            <nav className="navigation-container">
                {/* Logo */}
                <div className="nav-logo">
                    <Link to="/"><img
                        src="https://www.outleadsolutions.com/static/media/Outleadlogo.fc63d43a70b138363984.png"
                        alt="Logo"
                    /></Link>
                </div>

                {/* Desktop Menu */}
                <ul className={`navigation-menu ${menuOpen ? "active" : ""}`}>
                    {NavigationData.map((item, index) => (
                        <li key={index} className="navigation-item">
                            <Link
                                to={item.Path}
                                className="navigation-link"
                                onClick={() => setMenuOpen(false)} // close after click
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menu Icon for Mobile */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <IoMdClose /> : <FaBars />}
                </div>
            </nav>
        // </div>
    )
}

export default Navigation