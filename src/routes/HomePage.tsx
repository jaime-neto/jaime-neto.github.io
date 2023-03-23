import React from "react";

const HomePage = ()=>{
    return(
        <div>
            <div className="submenu">
                <input type="button" id="home" value="Home"/>
                <span className="espaco"></span>
                <input type="button" id="github" value="GitHub"/>
                <span className="espaco"></span>
                <input type="button" id="about" value="About"/>
                <span className="espaco"></span>
                <input type="button" id="contact" value="Contact"/>
            </div>
            
            <div className="welcome">
                <p id="texto">
                    Olá, me chamo
                    <h1>Jaime Neto.</h1>
                    <p>Um texto aqui falando brevemente sobre quem sou eu e o que o espectador irá encontrar nesse portfolio.</p>
                </p>
            </div>
            
            <div className="direitos">
                <p id="direitos">
                    &copy; 2023 Jaime Neto
                </p>
            </div>

            <div className="redes">
                <p>inst</p>
                <p>fac</p>
                <p>git</p>
            </div>

        </div>
    );
};

export default HomePage;