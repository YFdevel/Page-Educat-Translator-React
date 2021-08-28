import React from "react";
import image1 from "../Images/Group 23.png";
import image2 from "../Images/Group3.png";
import SelectLanguage from "./SelectLanguage";


const Header = (props) => {

    return (
        <header className="header container">
            <div className="header__logo-select-block">
                <div className="foto1">
                    <a href={"/"}> <img src={image1} alt={props.title}/></a>
                </div>
                <SelectLanguage title="foto" changeLanguage={props.delegate.changeLanguage}/>
            </div>

            <div className="header__text-block">
                <div className="header-p">Fullstack<br/><span
                    className="developer">{props.delegate.state.language.HEADER.DEVELOPER}</span>
                </div>
                <div className="skills">
                    <span>HTML</span> <span>CSS</span> <span>Javascript</span>
                    <span>Typescript</span> <span>React JS</span> <span>Node JS</span>
                    <span>Express JS</span><span>MongoDB</span> <span>Mongoose JS</span>
                </div>
                <a href="/">
                    <button className="header__button">
                        <span>{props.delegate.state.language.HEADER.HEADER_BUTTON}</span></button>
                </a>
            </div>
            <div className="header-right">
                <img src={image2} alt={props.title}/>
            </div>
        </header>
    );
}

export default Header;