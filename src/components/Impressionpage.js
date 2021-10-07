import React from 'react'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from './imgs/gd.png';
import Collapsible from 'react-collapsible';
import ButtonComp from './ButtonComp';

function Impressionpage( {soumissionActionButton} ) {
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
    IMPRESSION
</div>

</Fade>

<br/><br/>
<div className="servicepoptext">
<Collapsible trigger="IMPRESSION OFFSET (PRESSES À FEUILLES)">
    <p>
    Graphiscan dispose de presses Heidelberg. Avec elles, poussez l’audace des 4 couleurs process en ajoutant des couleurs d’accompagnement : couleurs métalliques ou PMS. Créez des effets spéciaux avec des vernis pleine surface, sélectifs ou teintés.Il n’y a plus de limite à votre imagination avec l’impression en 8 couleurs et les vernis aqueux pour vos emballages, vos rapports, vos brochures, etc.
    </p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>


<Collapsible trigger="IMPRESSION NUMÉRIQUE">
    <p>
    Impression numérique haut de gamme – HP Indigo 7 900 et HP Indigo 10 000 Impression en quadrichromie de qualité lithographique, sans film ni plaque.Système de personnalisation des documents à l’aide de bases de données.Large éventail de supports et de papiers allant du papier 120M texte au carton de 18 pts d’épaisseur : papier couché, non couché, autocollant, vinyle, acétate.Idéal pour les tirages de livres avec des quantités de 1 à 1000, les invitations personnalisées, le publipostage adressé, les rapports annuels, etc.
</p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>



<Collapsible trigger="IMPRESSION GRAND FORMAT">
    <p>
    L’impression grand format vous offre une multitude de supports d’impression et de finition pour répondre à tous vos projets.De l’impression UV en passant par le latex, un grand choix de produits est à votre disposition tels que des vinyles, des tissus, des bannières, des revêtements muraux, des canevas, etc.Que ce soit pour une boîte lumineuse, pour l’habillage de vos locaux ou encore pour de la publicité en magasin, les choix sont nombreux.Graphiscan propose une gamme complète de finition en grand format pour tout type d’application et de technologie.Nous offrons le laminage, le montage, la découpe personnalisée, la couture, la thermo-soudure, les œillets…Que ce soit un matériel rigide, une bannière, un lettrage, un cadre ou encore une structure autoportante, nous sommes prêts à vous les imprimer.Graphiscan s’assure d’amener votre projet où vous le souhaitez.Services d’installation complets, emballage responsable et distribution dans vos différents magasins. Demandez-le, nous l’offrons.
</p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>



<Collapsible trigger="RELIURE ET FINITION">
    <p>
    La finition de tous vos projets sous un même toit!Votre projet doit être relié avec des broches, une spirale, un wire-o, une couture ou une reliure allemande? Vous êtes à la bonne place chez Graphiscan.Il n’y a pas de reliure, alors nous ferons un pliage, une découpe, un embossage ou un estampage.Parlez-nous de vos projets, nous vous aiderons à atteindre vos objectifs.
</p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>

</div>

</div>
    )
}

export default Impressionpage
