import React from "react";
import {ImFacebook} from "react-icons/im";
import {AiFillGithub} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";

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
        </div>
    );

};

export default Footer;