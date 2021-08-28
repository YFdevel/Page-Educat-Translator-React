import React from "react";
import image from "./Images/Lang.png";




const SelectLanguage=(props)=>{


    return(
        <div className="lang">
            <img src={image} alt={props.title}/>
            <select name="languages" id="languages" onChange={props.changeLanguage}>
                <option value="ru" >RU</option>
                <option value="en" >EN</option>
            </select>
        </div>
    )
}

export  default SelectLanguage;