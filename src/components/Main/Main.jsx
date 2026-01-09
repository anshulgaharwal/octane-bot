import React, { useEffect, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <div className="nav-right">
                <img
                    className="theme-toggle"
                    src={darkMode ? assets.sun_icon : assets.moon_icon} 
                    alt="" 
                    onClick = {() => setDarkMode(!darkMode)}
                 />
            </div>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Anshul</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Plan a holiday</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Think a new idea</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Talk to me</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me with this code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='How you feel today?'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Terms and conditions applied.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main