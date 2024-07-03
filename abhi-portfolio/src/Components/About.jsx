import './About.css'; 
import React from 'react';
import java from '../imges/java.svg';
import python from '../imges/python.svg';
import js from '../imges/javascript.svg';
const About = () => {
    return (
        <div className="About">
            <div className='About-left'>
                <p>Something about me</p>
            </div>
            <div className='About-right'>
                <div className='About-orbit'>
                    <div className='orbit-item'>
                        <img src={java} alt='java'></img>
                    </div>
                    <div className='orbit-item'>
                        <img src={js} alt='js'></img>
                    </div>
                    <div className='orbit-item'>
                        <img src={python} alt='py'></img>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default About;