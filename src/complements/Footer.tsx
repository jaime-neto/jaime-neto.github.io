import React from "react";
import {ImFacebook} from "react-icons/im";
import {AiFillGithub} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";

const Footer = ()=>{

    var urlGit = "https://github.com/jaime-neto";
    var urlFacebook = "https://www.facebook.com/jaime.neto.75";
    var urlInstagram = "https://www.instagram.com/jaimeneto7/";

    function abrirURL(redeSocial: string){
        if(redeSocial === "facebook"){
            window.open(urlFacebook, '_blank');
        }else if(redeSocial === "git"){  
            window.open(urlGit, '_blank');
        }else if(redeSocial === "instagram"){
            window.open(urlInstagram, '_blank');
        }
    }

    return(
        <div>
            <div className="direitos">
                <p id="direitos">
                &copy; 2023 Jaime Neto
                </p>
            </div>

            <div className="redes">
                <button onClick={event => abrirURL("facebook")} id="face" type="button">
                    <ImFacebook/>
                </button>
                
                <p></p>
                
                <button onClick={event => abrirURL("git")} id="git" type="button">
                    <AiFillGithub/>
                </button>
        
                <p></p>

                <button onClick={event => abrirURL("instagram")} id="inst" type="button">
                    <BsInstagram/>
                </button>

            </div>
        </div>
    );

};

export default Footer;