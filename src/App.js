import React from 'react';
import './App.css';
import Header from "./Views/Components/Header";
import Footer from "./Views/Components/Footer";
import Home from "./Views/Pages/Home";
import {TEXT} from "./translate";




class App extends React.Component{

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
return(
       <div className="App">

           <Header title="foto" delegate={this} changeLanguage={this.changeLanguage}/>
           <Home title="foto" delegate={this}/>
           <Footer title="foto" delegate={this}/>

       </div>
)
   }
}

export default App;
