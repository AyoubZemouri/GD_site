import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from './imgs/gd.png';


function Soumissionpage() {
    return (
        <div className="soumissionform">



            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
            <div className="iconClose">
            <FontAwesomeIcon 
                icon={faTimes}
                
                />
            </div>
            </Link>

            <Fade top>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                <section className="logo poplogo">
                    <img src={Logo} alt="" />
                </section>
            </Link>
            </Fade>

            <Fade top>
                
            <div className="sectionTitle">
                SOUMISSION
            </div>
           
            </Fade>

            <br/><br/>

            <Zoom delay={200} duration={500}>
            <div className="contactform">
                <form>
                    <input type="text" name="nom" placeholder="Nom complet"/>
                    <input type="text" name="email" placeholder="Adresse courriel"/>
                    <input type="text" name="tel" placeholder="Téléphone"/>
                    <input type="text" name="entreprise" placeholder="Entreprise"/>
                    <input type="text" name="ref" placeholder="Référé par"/>
                    <textarea name="message" placeholder="Votre demande..."></textarea>

                    <button className="contactSend">ENVOYER</button>
                </form>
                <br/>
            </div>
            </Zoom>
        </div>
    )
}

export default Soumissionpage
