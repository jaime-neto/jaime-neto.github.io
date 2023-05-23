import React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = ()=>{

    const urlGit = "https://github.com/jaime-neto";
    const urlFacebook = "https://www.facebook.com/jaime.neto.75";
    const urlInstagram = "https://www.instagram.com/jaimeneto7/";
    const urlLinkedin = "https://www.linkedin.com/in/jaime-neto-19a2a620b";

    function abrirURL(redeSocial: string){
        if(redeSocial === "facebook"){
            window.open(urlFacebook, '_blank');
        }else if(redeSocial === "git"){  
            window.open(urlGit, '_blank');
        }else if(redeSocial === "instagram"){
            window.open(urlInstagram, '_blank');
        }else if(redeSocial ==="linkedin"){
            window.open(urlLinkedin, '_blank');
        }
    }

    return(
        <Grid id="footer" container spacing={1} alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
            <Grid item md={12} xs={3}>
                <FacebookIcon onClick={event => abrirURL("facebook")} className="item-footer" fontSize="medium"/>                
            </Grid>
                            
            <Grid item md={12} xs={3}>    
                <GitHubIcon onClick={event => abrirURL("git")} className="item-footer" fontSize="medium"/>
            </Grid>                

            <Grid item md={12} xs={3}>    
                <InstagramIcon onClick={event => abrirURL("instagram")} className="item-footer" fontSize="medium"/>
            </Grid>
                    
            <Grid item md={12} xs={3}> 
                <LinkedInIcon onClick={event => abrirURL("linkedin")} className="item-footer" fontSize="medium"/>
            </Grid>    
        </Grid>
    );
};

export default Footer;