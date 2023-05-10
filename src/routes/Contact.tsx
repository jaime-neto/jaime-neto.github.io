import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";

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
        <div>
            <div className="subMenuContact">
                <h1>Contact</h1>

                <p>
                    Obrigado por ler até aqui. Estou em busca de minha primeira oportunidade como desenvolvedor e, caso queira entrar em contato comigo, 
                    disponibilizo abaixo todas as minhas redes sociais. Além disso, sinta-se à vontade para fazer perguntas ou simplesmente dizer olá.
                </p>

                <div className="botaoOla">
                    <a id="ola" href="mailto:jaimeneto99@gmail.com">Diga olá</a>
                </div>

                <p></p>
                
                <div className="redes-contact">
                <button onClick={event => abrirURL("facebook")} className="item-footer" type="button">
                    <ImFacebook/>
                </button>
                
                <button onClick={event => abrirURL("git")} className="item-footer" type="button">
                    <AiFillGithub/>
                </button>

                <button onClick={event => abrirURL("instagram")} className="item-footer" type="button">
                    <BsInstagram/>
                </button>

                <button onClick={event => abrirURL("linkedin")} className="item-footer" type="button">
                    <FiLinkedin/>
                </button>

            </div>

            </div>

            <div className="direitos">
                <p> Copyright &copy; 2023 Jaime Neto</p>
                <p>Designed & Built by Jaime Neto</p>
            </div>
            
        </div>
    );
};

export default Contact;