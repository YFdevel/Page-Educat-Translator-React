import React from "react";
import Video from "./Components/Video.js";
import image1 from "./Images/Group 30.png";
import image2 from "./Images/Group 27.png";
import image3 from "./Images/Group 31.png";



const Home=(props)=>{

    return(
        <div className="home-page container">
            <div className="info"><span className="price_course">{props.delegate.state.language.HOME.PRICE_COURSE}</span>
                <span className="start info__item">{props.delegate.state.language.HOME.START}</span>
                <span className="format info__item">{props.delegate.state.language.HOME.FORMAT}</span>
                <span className="duration info__item">{props.delegate.state.language.HOME.DURATION}</span>
                <span className="level info__item">{props.delegate.state.language.HOME.LEVEL}</span></div>
            <div className="textBlock">
                <div>
                    <p className="headline developer_home">{props.delegate.state.language.HOME.DEVELOPER_HOME}</p>
                    <p className="textBlock__text full_text">{props.delegate.state.language.HOME.FULL_TEXT}</p>
                </div>
                <div>
                    <p className="headline">Frontend + Backend</p>
                    <p className=" textBlock__text front_back_text">{props.delegate.state.language.HOME.FRONT_BACK_TEXT}</p>
                </div>
                <div>
                    <p className="headline junior_it">{props.delegate.state.language.HOME.JUNIOR_IT}</p>
                    <p className="textBlock__text junior_text">{props.delegate.state.language.HOME.JUNIOR_TEXT}</p>
                </div>
            </div>
            <Video propsVideo={props.delegate.state.language}/>
            <p id="forWhat" className="for_course">{props.delegate.state.language.HOME.FOR_COURSE}</p>
            <div className="blocks">
                <div>
                    <p><img src={image1} alt={props.title}/></p>
                    <p className="headline wish">{props.delegate.state.language.HOME.WISH}</p>
                    <p className="wish_text">{props.delegate.state.language.HOME.WISH_TEXT}</p>
                </div>
                <div>
                    <p><img src={image2} alt={props.title}/></p>
                    <p className="headline beginners">{props.delegate.state.language.HOME.WISH}</p>
                    <p>{props.delegate.state.language.HOME.FRONT_BACK_TEXT}</p>
                </div>
                <div>
                    <p><img src={image3} alt={props.title}/></p>
                    <p className="headline specialists">{props.delegate.state.language.HOME.SPECIALISTS}</p>
                    <p className="it_text">{props.delegate.state.language.HOME.IT_TEXT}</p>
                </div>
            </div>
        </div>
    );
}
export  default Home;