import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";
import ButtonComp from './ButtonComp';
import { Link } from 'react-router-dom';

function Realisationspage({soumissionActionButton}) {

    const Realisations = [
        {
            title: "IMPRESSION",
            image: "../imgs/rea1.jpg",
            text: "",
            link: "/rea1",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea2.png",
            text: "",
            link: "/rea2",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea3.jpg",
            text: "",
            link: "/re3",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea4.jpg",
            text: "",
            link: "/rea4",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea5.jpg",
            text: "",
            link: "/rea5",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea6.jpg",
            text: "",
            link: "/rea6",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/service1.jpg",
            text: "",
            link: "/rea7",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/service1.jpg",
            text: "",
            link: "/rea8",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea9.jpg",
            text: "",
            link: "/rea9",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea10.jpg",
            text: "",
            link: "/rea10",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea11.jpg",
            text: "",
            link: "/rea11",
        },
        {
            title: "IMPRESSION",
            image: "../imgs/rea12.jpg",
            text: "",
            link: "/rea12",
        },
    ];

    return (
        <div className="realisationsPage">
            <Fade delay={300}>
                <div className="sectionTitle">
                    NOS RÉALISATIONS
                </div>
            </Fade>

            <Fade delay={700}>
                <div className="theGrid">
                    {   
                        Realisations.map(function(Realisation, i) {
                            return (
                                <Link to={Realisation.link}>
                                <article className="realisation" style={{'backgroundImage': `url(${Realisation.image})`,
                                'backgroundSize': `cover`,
                                'backgroundPosition': `center center` 
                                }}>
                            
                                </article>
                                </Link>
                            );
                        })
                    }
                </div>
            </Fade>

            <div className="callToAction">    
                <Zoom delay={500}>
                    <Link to="/soumission">
                        <ButtonComp buttonAction={soumissionActionButton} buttonText="SOUMISSION EN LIGNE" />
                    </Link>
                </Zoom>
            </div>
        </div>
    )
}

export default Realisationspage
