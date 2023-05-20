import React from "react";
import perfil from "../img/perfil.jpeg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const About = ()=>{
    return(
        <Grid container spacing={2}>
            <Grid item md={3} xs={12}> </Grid>
            <Grid className="about" item md={4} xs={12} sx={{ marginTop: "5%" }}>
                
                <Typography variant="h2">
                    About me
                </Typography>

                <Typography variant="body2" align="justify">
                    Olá, meu nome é Jaime e sou formado em Bacharelado em Tecnologia da Informação. Moro em Serrinha dos Pintos-RN e tenho habilidade em 
                    encontrar soluções para diversos tipos de problemas, especialmente quando envolvem programação. Embora tenha começado na área por acaso,
                    durante o curso de TI, fui me interessando cada vez mais e me tornando familiarizado com as tecnologias e ferramentas utilizadas na área.
                    Estou sempre em busca de aprendizado e aprimoramento para me tornar um profissional competente e atualizado.
                    <p></p>
                    Ingressei no curso de bacharelado em Tecnologia da Informação em 2016. Durante toda a minha jornada acadêmica, adquiri conhecimentos em 
                    diversas tecnologias e aprimorei minha habilidade em lidar com problemas do cotidiano. A visão proporcionada pelo curso ampliou minha 
                    perspectiva de mundo e me preparou para atuar no mercado de trabalho. A grade curricular tinha ênfase em Engenharia de Software, o que me 
                    levou a cursar disciplinas como metodologias ágeis, análise de requisitos, qualidade e teste de software, consolidando minha formação nesta 
                    área.
                    <p></p>
                    Trabalho como Técnico de Telecomunicações desde 2016, desempenhando atividades como instalação e manutenção de equipamentos de rádio e 
                    fibra óptica. Ao longo da minha trajetória profissional, desenvolvi habilidades em comunicação interpessoal, liderança de equipes e gestão
                    de situações sob pressão.
                  
                    No momento, busco uma oportunidade para atuar como desenvolvedor de software, área na qual sou formado. A seguir, compartilho algumas das 
                    tecnologias com as quais tenho experiência e que tenho utilizado em projetos pessoais recentes:
                    
                    <pre>&gt; C/C++        &gt; JavaScript</pre>
                    <pre>&gt; Java         &gt; PostgreSQL</pre>
                    <pre>&gt; Git          &gt; Node.js</pre>
                    <pre>&gt; Typescript   &gt; React</pre>
                    <pre>&gt; HTML         &gt; CSS</pre>
                </Typography> 
                    
            </Grid>
            
            <Grid item md={4} xs={12} sx={{ marginTop: "15%" }}>
                <img id="perfil" src={perfil} alt="perfil" width="250" height="250"/>
            </Grid>

            <Grid item md={1} xs={12}> </Grid>
        </Grid>
    );
};

export default About;