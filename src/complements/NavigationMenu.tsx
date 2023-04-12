import React, { useState } from "react";
import { Link } from "react-router-dom";

const urlGit = "https://github.com/jaime-neto";
const openGitHub = () => {
    window.open(urlGit, '_blank');
};

const itemsMenu = [{
    text: '1.Home',
    path: '/'
},
{
    text: '2.About',
    path: '/about'
},
{
    text: '3.Contact',
    path: '/contact'
}];

const NavigationMenu = () => {
    const [ itemActive, setItemActive ] = useState<number>(0);
    return(
        <div>
            <div className="submenu">
                {
                    itemsMenu.map((it, idx) => (<Link to={it.path}>
                                                    <input onClick={() => setItemActive(idx)} className={(idx === itemActive) ? 'item-menu-active' : 'item-menu'} value={it.text} />
                                                </Link>))
                }
                <input onClick={openGitHub} type="button" className="item-menu" value="4.GitHub"/>
            </div>
        </div>
    );
};

export default NavigationMenu;