import React from 'react'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from './imgs/gd.png';
import Collapsible from 'react-collapsible';
import ButtonComp from './ButtonComp';

function Emballagepage( {soumissionActionButton} ) {
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
    EMBALLAGE
</div>

</Fade>

<br/><br/>
<div className="servicepoptext">
<Collapsible trigger="PACKAGING">
    <p>
    Boîtes pliantes pour les domaines de la cosmétique, de l’alimentation, de la distribution ainsi que pour les produits de cannabis, nos conseillers sont là pour vous orienter dans le choix et l’épaisseur du matériel idéal. Ils peuvent aussi élaborer, avec l’aide de nos graphistes, le design visuel et technique pour que votre produit se démarque.Nos équipements de production vous assureront un produit final de haute qualité.
    </p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>


<Collapsible trigger="SACS">
    <p>
    Le sac, qu’il soit en papier ou réutilisable, est l’outil pratique par excellence pour véhiculer votre image. Grâce à notre implantation en Asie depuis 2007, nous avons les capacités de production pouvant répondre à vos besoins pour des tirages de 5000 sacs et plus.Nous desservons le marché de la restauration en fournissant des sacs de livraison papier ainsi que le marché promotionnel avec des sacs réutilisables, entre autres. La conception, l’idéation et le dessin technique sont assurés par notre équipe graphique.
</p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>



<Collapsible trigger="ÉTIQUETTES">
    <p>
    Chez Graphiscan, nos passions nous guident. Boire et manger en sont deux.C’est pourquoi, depuis une quinzaine d’années, nous avons développé une grande expertise pour les étiquettes, particulièrement dans les domaines de l’alimentation, des producteurs du terroir et des microbrasseries.Que vos besoins nécessitent une production en numérique, en offset ou en flexographie, nous pouvons vous aider. De plus, la conception, le positionnement de votre image en magasin et le respect des normes graphiques bonifient notre offre.
</p>
    <Link to="/soumission">
    <ButtonComp buttonAction={soumissionActionButton} buttonText="DEMANDER UNE SOUMISSION" />
    </Link>
</Collapsible>
</div>

</div>
    )
}

export default Emballagepage
