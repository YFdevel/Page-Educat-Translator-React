import React from 'react';
import video from "./CodeSandbox.mov";
import image from "./DSC.png";
import image2 from "./playbutton.svg";


class Video extends React.Component {
    constructor(props) {
        super(props);

        this.hiddenTextRef = React.createRef();
        this.hiddenBtnRef = React.createRef();
        this.videoRef = React.createRef();
    }

    videoPlay = () => {
        this.hiddenBtnRef.current.style.display = "none";
        this.hiddenTextRef.current.style.display = "none";
        this.videoRef.current.play();
        this.videoRef.current.controls = true;
    }

    render() {

        return (
            <div className={"videoWrapper"}>

                <video ref={this.videoRef} controls={false} loop muted poster={image}>
                    <source src={video} type="video/mp4"/>
                </video>

                <div className="videoWrapper__text-block">
                    <div className="videoButton" onClick={this.videoPlay} ref={this.hiddenBtnRef}>
                        <img src={image2} alt="foto"/>
                        <span className="videoButton__text">{this.props.propsVideo.VIDEO.LOOK_VIDEO}</span>
                    </div>
                    <p className="videoWrapper__text" ref={this.hiddenTextRef}>
                        {this.props.propsVideo.VIDEO.ABOUT_COURSE}
                    </p>
                </div>

            </div>
        );
    }

}

export default Video;