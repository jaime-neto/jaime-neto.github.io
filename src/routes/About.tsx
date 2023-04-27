import React from "react";
import perfil from "../img/perfil.png";

const About = ()=>{
    return(
        <div>
            <div className="about">
                <h1>About me</h1>
                
                <p>Olá, meu nome é Jaime, moro em Serrinha dos Pintos-RN. Sou um cara que gosta de dar soluções para problemas de uma forma geral, 
                    principalmente quando esses tipos de problemas podem ser resolvidos na forma de desenvolvimento. Apesar de cair de paraquedas 
                    nesta área, através do curso de TI (Tecnologia da Informação), meu interesse e familiaridade neste ramo foi crescendo 
                    a cada período que se passava.
                </p>

                <p>
                    Comecei o curso de TI em 2016, ofertado pela UFERSA (Universidade Federal Rural do Semi-árido), com 21 anos de idade. Antes disso,
                    já trabalhava como técnico em Telecomunicações, com as tecnologias rádio e fibra óptica, emprego a qual estou atualmente.
                    Conclui o curso de bacharel em TI no ano de 2019. Durante o período do curso, aprendi muitas tecnologias e melhorei bastante a forma
                    como lidava com problemas do dia a dia. O curso era com enfâse em Engenharia de Software, paguei algumas cadeiras e além de aprender
                    algumas linguagens de programação e ferramentas, também aprendi bastante sobre metodologias ágeis para desenvolvimento.
                </p>

                <p>
                    Atualmente, estou buscando atuar na área na qual sou formado, como desenvolvedor back-end. Ainda na faculdade, aprendi e usei em projetos
                    as seguintes tecnologias: C, C++, Java, Javascript, html, css e banco de dados. Nos dias mais atuais, estudei um pouco de Node.js e atualmente
                    tenho utilizado para estudos e projetos pessoais as seguintes tecnologias: Github, Javascript, Typescript, React, html e css.
                </p>
            
                <div className="perfil">   
                    <img src={perfil} alt="perfil" width="250" height="250" />"
                </div>

            </div>  
        </div>
    );
};

export default About;