import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const HomePage = ()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            
            <Grid item xs={5} sx={{ marginTop: "10%" }}> 
                <Typography variant="h2">
                    Olá! <Typography variant="h2" color="yellow">Me chamo Jaime Neto</Typography> 
                </Typography>

                <Typography variant="body1" align="justify">
                    Sou bacharel em Tecnologia da Informação pela UFERSA e estou em busca de oportunidades para iniciar minha carreira como desenvolvedor. 
                    Neste espaço, gostaria de compartilhar um pouco sobre minha formação e as tecnologias com as quais tenho experiência.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default HomePage;