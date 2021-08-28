import React from "react";
import {TEXT} from "../translate";


const withApp = (Component) => {

    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                language: TEXT.RU
            }

            this.changeLanguage=this.changeLanguage.bind(this);

        }


        changeLanguage = (e) => {

            if (e.target.value === "en") {
                this.setState({language: TEXT.EN})


            } else if(e.target.value === "ru"){
                this.setState({language: TEXT.RU})

            }

        }

        render() {
            return (
                <Component delegate={this}/>
            )
        }
    }

    return HOC;
}


export default withApp;