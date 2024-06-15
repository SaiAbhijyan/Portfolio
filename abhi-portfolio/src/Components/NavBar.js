import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-title">Sai Abhijyan T</div>
            <nav className="navbar-nav">
                <a href="#NAv" className="navbar-nav-link">About</a>
                <a href="#N" className="navbar-nav-link">Experience</a>
                <a href="#n" className="navbar-nav-link">Skills</a>
                <a href="#M" className="navbar-nav-link">Education</a>
                <a href="#M" className="navbar-nav-link">Contact</a>
            </nav>
            <button className="navbar-button">Connect on LinkedIn</button>
        </header>
    );
}

export default Navbar;