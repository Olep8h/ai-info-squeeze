import React from "react";
import {logo} from "../assets";
import "/stylization/Hero.css"

const Hero = () => {
    return (
        <header className="hero">
            <nav className="navbar">
                <img src={logo} alt="sumz_logo" className="logo"/>

                <button className="github-btn"
                        type="button"
                        onClick={() => window.open("https://github.com/Olep8h", "_blank")}>

                    <span className="hover-underline-animation"> GitHub </span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg"
                         id="arrow-horizontal">
                        <path transform="translate(30)"
                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                              data-name="Path 10" id="Path_10"></path>
                    </svg>
                </button>
            </nav>

            <h1 className="head-text">
                Summarize Articles with <br className="break-md"/>
                <span className="gradient-text">OpenAI GPT-4</span>
            </h1>

            <h2 className="description">
                Simplify your reading and analysis with Summize, an open-source summarizing article editor that turns
                long
                articles into clear and concise summaries. Save time now!
            </h2>
        </header>
    );
};

export default Hero;
