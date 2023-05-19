import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
        <Grid id="footer" container spacing={2}>
            <Grid item xs={1}>
                
                <FacebookIcon onClick={event => abrirURL("facebook")} className="item-footer" fontSize="medium"/>                
                <Typography></Typography>
                <GitHubIcon onClick={event => abrirURL("git")} className="item-footer" fontSize="medium"/>
                <Typography></Typography>
                <InstagramIcon onClick={event => abrirURL("instagram")} className="item-footer" fontSize="medium"/>
                <Typography></Typography>
                <LinkedInIcon onClick={event => abrirURL("linkedin")} className="item-footer" fontSize="medium"/>
    
            </Grid>

            <Grid item xs={9}></Grid>
            
            <Grid item xs={2} sx={{ marginTop: "10%" }}>
                <Typography>
                    <a id="email" href="mailto:jaimeneto99@gmail.com">jaimeneto99@gmail.com</a>  
                </Typography>    
            </Grid>

        </Grid>



















        /*
        <div>
            <div className="emailFooter">
                <p>
                    <a id="email" href="mailto:jaimeneto99@gmail.com">jaimeneto99@gmail.com</a>
                </p>
            </div>

            <div className="redes">
                <button onClick={event => abrirURL("facebook")} className="item-footer" type="button">
                    <ImFacebook/>
                </button>
                
                <p></p>
                
                <button onClick={event => abrirURL("git")} className="item-footer" type="button">
                    <AiFillGithub/>
                </button>
        
                <p></p>

                <button onClick={event => abrirURL("instagram")} className="item-footer" type="button">
                    <BsInstagram/>
                </button>

                <p></p>

                <button onClick={event => abrirURL("linkedin")} className="item-footer" type="button">
                    <FiLinkedin/>
                </button>
                
                <p></p>

                <div id="riscoItensFooter"></div>

            </div>
        </div>*/
    );

};

export default Footer;