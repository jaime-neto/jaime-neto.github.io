import React from "react";

const NavigationMenu = ()=>{

    return(
        
        <div className="submenu">
            <input type="button" id="home" value="Home"/>
            <span className="espaco"></span>
            <input type="button" id="github" value="GitHub"/>
            <span className="espaco"></span>
            <input type="button" id="about" value="About"/>
            <span className="espaco"></span>
            <input type="button" id="contact" value="Contact"/>
        </div>
    );

};

export default NavigationMenu;