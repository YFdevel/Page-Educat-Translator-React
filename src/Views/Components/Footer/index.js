import React from "react";
import image1 from "../Images/Group 23.png";





const Footer = (props) => {

    return (
        <footer className="footer container" >
            <div className="footerDiv1">
                <p className="become_specialist">{props.delegate.state.language.FOOTER.BECOME_SPECIALIST}</p>

                    <button className="footer__button"><a href="/">{props.delegate.state.language.FOOTER.START_FREE}</a></button>

            </div>
            <div className="footerDiv2">
                <div className="foto1">
                   <a href={"/"}> <img src={image1} alt={props.title}/></a>
                </div>
                <div className="contacts">
                    <a href="/"><span className="contacts">{props.delegate.state.language.FOOTER.CONTACTS}</span></a>
                    <a href="/"><span className="politics">{props.delegate.state.language.FOOTER.POLITICS}</span></a>
                    <a href="/"><span className="conditions">{props.delegate.state.language.FOOTER.CONDITIONS}</span></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;