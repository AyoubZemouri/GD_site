import React from 'react'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from './imgs/gd.png';
import Collapsible from 'react-collapsible';
import ButtonComp from './ButtonComp';

function Publipostagepage({ soumissionActionButton }) {
    return (
        <div className="servicepop">



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
            PUBLIPOSTAGE
        </div>
       
        </Fade>

        <br/><br/>
        <div className="servicepoptext">
        <Collapsible open="true" trigger="ENVOIS POSTAUX CLÉ EN MAIN (PUBLIPOSTAGE)">
            <p>
            Favorisez la fidélisation et la rétention de votre clientèle en envoyant du courrier personnalisé à vos clients.Saviez-vous que 87 % des Canadiens ouvrent le courrier qui leur est personnellement adressé?Graphiscan peut vous aider à gérer votre publipostage et à rendre votre entreprise plus efficace en travaillant avec vous pour préparer votre prochaine campagne adressée en suivant les étapes suivantes :
            <ul>
                <li>Élaboration de la stratégie de votre campagne</li>
                <li>Conception et impression de votre envoi</li>
                <li>Insertion de vos documents dans les enveloppes</li>
                <li>Validation de votre liste d’adresse</li>
                <li>Respect et validation des spécifications relatives au courrier</li>
                <li>Préparation et acheminement à la centrale de Postes Canada</li>
            </ul>
            </p>
            <Link to="/soumission">
            <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
            </Link>
        </Collapsible>
        </div>

    </div>
    )
}

export default Publipostagepage
