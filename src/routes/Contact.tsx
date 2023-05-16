import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

const Contact = ()=>{
    return(
        <Grid container spacing={1}>
            <Grid item xs={3}> </Grid>
            <Grid item xs={5} sx={{ marginTop: "10%" }}>
                
                <Typography variant="h2">
                    Contact
                </Typography>

                <Typography variant="body1" align="justify">
                    Obrigado por ler até aqui. Estou em busca de minha primeira oportunidade como desenvolvedor e, caso queira entrar em contato comigo, 
                    disponibilizo abaixo todas as minhas redes sociais. Além disso, sinta-se à vontade para fazer perguntas ou simplesmente dizer olá.
                </Typography>

                    <FacebookIcon onClick={event => abrirURL("facebook")} className="item-footer" fontSize="medium"/>
                
                    <GitHubIcon onClick={event => abrirURL("git")} className="item-footer" fontSize="medium"/>

                    <InstagramIcon onClick={event => abrirURL("instagram")} className="item-footer" fontSize="medium"/>
            
                    <LinkedInIcon onClick={event => abrirURL("linkedin")} className="item-footer" fontSize="medium"/>
               
                    <Typography> Copyright &copy; 2023 Jaime Neto </Typography>
                    <Typography> Designed & Built by Jaime Neto </Typography>
            </Grid>
        </Grid>
    );
};

export default Contact;