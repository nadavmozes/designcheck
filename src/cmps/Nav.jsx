import React from 'react'
import Logo from '../assets/images/agency@1X.png'
export function Nav() {
    return (
        <div className="nav-bar flex space-between">
            <div className="logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="nav-links">
                {/* <a href={Logo} className="logo"></a> */}
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Our Services</a>
                <a href="">Support</a>
            </div>
            <button className="contact-us">CONTACT</button>
        </div>
    )
}