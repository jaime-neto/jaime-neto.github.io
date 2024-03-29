import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

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
            <Grid item md={4} xs={12}> </Grid>
            <Grid item md={4} xs={12} sx={{ marginTop: "10%" }}>
    
                <Typography variant="h2">
                    Contact
                </Typography>

                <Typography variant="h6" align="justify">
                    Obrigado por ler até aqui. Estou em busca de minha primeira oportunidade como desenvolvedor e, caso queira entrar em contato comigo, 
                    disponibilizo abaixo todas as minhas redes sociais. Além disso, sinta-se à vontade para fazer perguntas ou simplesmente dizer olá.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}> </Grid>

                    <Grid item md={4} xs={12} sx={{ marginTop: "2%" }}>
                        <Button id="botao-ola" variant="contained">
                            <a id="texto-ola" href="mailto:jaimeneto99@gmail.com">Diga olá</a>
                        </Button>
                    </Grid>
                    
                    <Grid item md={4} xs={12}> </Grid>
                </Grid>

                <Typography></Typography>

                <FacebookIcon onClick={event => abrirURL("facebook")} className="item-footer-contact" fontSize="large"/>
                
                <GitHubIcon onClick={event => abrirURL("git")} className="item-footer-contact" fontSize="large"/>

                <InstagramIcon onClick={event => abrirURL("instagram")} className="item-footer-contact" fontSize="large"/>
            
                <LinkedInIcon onClick={event => abrirURL("linkedin")} className="item-footer-contact" fontSize="large"/>
                    
            </Grid>
            <Grid item md={4} xs={12}> </Grid>

            <Grid container spacing={1}>
                <Grid item md={5} xs={12}> </Grid>
                
                <Grid item md={2} xs={12} sx={{ marginTop: "13%" }} alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
                    <Typography> Copyright &copy; 2023 Jaime Neto </Typography>
                    <Typography> Designed & Built by Jaime Neto </Typography>
                </Grid>

                <Grid item md={5} xs={12}> </Grid>        
            </Grid>
            
        </Grid>
    );
};

export default Contact;