import React, { useEffect } from 'react';
import './Home.css'; 

const Home = () => {
    const scrollToSection = (id) =>{
        const ele = document.getElementById(id);
        if(ele){
            ele.scrollIntoView({behavior:"smooth"});
        }
    }
    useEffect(() => {
        const handleMouseMove = (e) => {
            const interactive = document.querySelector('.interactive');
            interactive.style.left = `${e.clientX}px`; 
            interactive.style.top = `${e.clientY}px`; 
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="home">
            <div className="gradient-bg">
                <header className="navbar">
                <div className="navbar-title">Sai Abhijyan T</div>
                <nav className="navbar-nav">
                    <div className="navbar-nav-link" onClick={()=> scrollToSection("About")}>About</div>
                    <div className="navbar-nav-link" onClick={()=> scrollToSection("Experience")}>Experience</div>
                    <div className="navbar-nav-link" onClick={()=> scrollToSection("Skills")}>Skills</div>
                    <div className="navbar-nav-link" onClick={()=> scrollToSection("Education")}>Education</div>
                    <div className="navbar-nav-link" onClick={()=> scrollToSection("Contact")}>Contact</div>
                </nav>
                <button className="navbar-button">Connect on LinkedIn</button>
                </header>
                <div className="centered-text">
                    <p>Hi, I'm <strong>Sai Abhi T 💩</strong></p>
                    <div className='centered-text-inner'>
                        <p>I'm a passionate software engineer with an intest in</p>
                        <div class="rotator-wrapper">
                            <p><span class="rotator">
                            <span>Full-Stack Dev</span>
                            <span>Machine Learning</span>
                            <span>Cloud Computing</span>
                            <span>Data Science</span>
                            </span></p> 
                    </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
