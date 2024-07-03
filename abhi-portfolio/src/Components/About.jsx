import './About.css'; 
import React from 'react';
import java from '../imges/java.svg';
import python from '../imges/python.svg';
import js from '../imges/javascript.svg';
import c from '../imges/c.svg'; // Add your central image here

const About = () => {
    return (
        <div className="About">
            <div className="circle-container">
                <div className="inner-circle">
                    <div className="icon google-drive">
                        <img src={python} alt="Google Drive" />
                    </div>
                    <div className="icon notion">
                        <img src={java} alt="Notion" />
                    </div>
                    <div className="icon whatsapp">
                        <img src={js} alt="WhatsApp" />
                    </div>
                    <div className="icon github">
                        <img src={c} alt="GitHub" />
                    </div>
                </div>
             <div className="title">Bot</div>
            </div>
        </div> 
    );
}

export default About;
