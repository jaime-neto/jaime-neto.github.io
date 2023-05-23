import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const urlGit = "https://github.com/jaime-neto";
const openGitHub = () => {
    window.open(urlGit, '_blank');
};

const itemsMenu = [{
    text: 'Home',
    path: '/portfolio'
},
{
    text: 'About',
    path: '/about'
},
{
    text: 'Contact',
    path: '/contact'
}];

const NavigationMenu = () => {
    const [ itemActive, setItemActive ] = useState<number>(0);
    return(
        <Grid container spacing={12}>
            <Grid item md={7} xs={12}> </Grid>
            <Grid  item md={5} xs={12} sx={{ marginTop: "0%" }}>
                {
                    itemsMenu.map((it, idx) => (<Link to={it.path}>
                                                    <input onClick={() => setItemActive(idx)} className={(idx === itemActive) ? 'item-menu-active' : 'item-menu'} value={it.text} />
                                                </Link>))
                }
                <input className="item-menu" onClick={openGitHub} type="button" value="GitHub"/>
            </Grid>
        </Grid>
    );
};

export default NavigationMenu;