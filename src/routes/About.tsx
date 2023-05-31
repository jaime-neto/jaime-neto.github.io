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

                <Typography variant="body1" align="justify">
                    Olá, meu nome é Jaime, sou formado em Tecnologia da Informação (TI) e estou em busca de uma oportunidade como desenvolvedor de software. 
                    Ao longo da minha jornada acadêmica, obtive um amplo conjunto de habilidades em diversas áreas tecnológicas, tais como fundamentos da 
                    programação, desenvolvimento de software, banco de dados, redes de computadores e sistemas operacionais. Além disso, pude aprimorar minha 
                    capacidade de lidar com problemas complexos de forma eficiente e eficaz. Estou entusiasmado para aplicar esses conhecimentos e competências
                    em um ambiente profissional e contribuir para projetos desafiadores e inovadores. 
                    <Typography></Typography>
                    Trabalho como Técnico de Telecomunicações desde 2016, desempenhando atividades como instalação e manutenção de equipamentos de rádio e fibra óptica.
                    Ao longo da minha trajetória profissional, desenvolvi habilidades em comunicação interpessoal, liderança de equipes e gestão de situações sob pressão. 
                    <Typography></Typography>
                    Hobbies e Interesses: Além da minha paixão por TI, tenho também alguns hobbies que me ajudam a manter uma vida equilibrada. Sou entusiasta da corrida
                    de rua, através dessa prática, desenvolvo disciplina, perseverança e uma mentalidade de melhoria contínua. Além disso, sou um adepto fervoroso da 
                    musculação, valorizando os benefícios que essa atividade traz para a saúde física e mental. Através da musculação, construo força, resistência e 
                    bem-estar geral. Essas atividades complementares não apenas me ajudam a manter uma vida ativa e saudável, mas também aprimoram minha habilidade em 
                    lidar com desafios e metas.
                    <Typography></Typography>
                    Algumas das tecnologias com as quais tenho experiência e que tenho utilizado em projetos pessoais recentes:

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