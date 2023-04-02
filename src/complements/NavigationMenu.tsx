import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = ()=>{

    return(
        <div>
            <div className="submenu">
                <Link to="/"><input type="button" id="home" value="Home"/></Link>
                <span className="espaco"></span>
                <Link to="/github"><input type="button" id="github" value="GitHub"/></Link>
                <span className="espaco"></span>
                <Link to="/about"><input type="button" id="about" value="About"/></Link>
                <span className="espaco"></span>
                <Link to="/contact"><input type="button" id="contact" value="Contact"/> </Link>
            </div>
        </div>
    );
};

export default NavigationMenu;