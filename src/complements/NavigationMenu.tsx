import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = ()=>{

    var url = "https://github.com/jaime-neto";

    function openGitHub(){
        window.open(url, '_blank');
    }

    return(
        <div>
            <div className="submenu">
                <Link to="/"><input type="button" id="home" value="Home"/></Link>
                <span className="espaco"></span>
                <input onClick={openGitHub} type="button" id="github" value="GitHub"/>
                <span className="espaco"></span>
                <Link to="/about"><input type="button" id="about" value="About"/></Link>
                <span className="espaco"></span>
                <Link to="/contact"><input type="button" id="contact" value="Contact"/> </Link>
            </div>
        </div>
    );
};

export default NavigationMenu;