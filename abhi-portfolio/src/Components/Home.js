import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {
    const interBubbleRef = useRef(null);
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    useEffect(() => {
        const move = () => {
            setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
            setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);

            if (interBubbleRef.current) {
                interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }

            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => {
            setTgX(event.clientX);
            setTgY(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [curX, curY, tgX, tgY]);

    return (
        <div className="home-container text-white">
            <main className="home-main">
                <div className="home-status">Open to Work</div>
                <h1 className="home-heading">
                    A well balanced and detail oriented developer<br />from India
                </h1>
                <p className="home-subheading">Tech Enthusiast</p>
                <button className="home-resume-button">See Resume</button>
                <div ref={interBubbleRef} className="interactive" />
            </main>
        </div>
    );
}

export default Home;
