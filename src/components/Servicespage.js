import React from 'react'
import CountComp from './CountComp';
import { Fade, Zoom } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Servicespage() {

    const Textes = "De la création de votre papeterie jusqu’aux emballages, en passant par la campagne de promotion, Graphiscan vous accompagne dans la réalisation de visuels à l’image de votre entreprise et qui savent se démarquer. Nous saurons vous conseiller pour un projet clé en main, de la conception jusqu’à l’impression.";

    const Blocks = [
        {
            title: "IMPRESSION",
            image: "../imgs/service1.jpg",
            link: "/impression",
            services: [
                {
                    service: "chose",
                    description: "chose",
                },
            ]

        },
        {
            title: "EMBALLAGE",
            image: "../imgs/service2.jpg",
            link: "/emballage",
            services: [
                {
                    service: "chose",
                    description: "chose",
                },
            ]

        },
        {
            title: "PUBLIPOSTAGE",
            image: "../imgs/service3.jpg",
            link: "/publipostage",
            services: [
                {
                    service: "chose",
                    description: "chose",
                },
            ]

        },
    ];

    function getSubService(arr) {
        console.log(arr);
    }
    
    return (
        <div className="servicesPage">
            <Fade delay={300}>
            <div className="sectionTitle">
                NOS SERVICES
            </div>

            <div className="sectionTextes">
                <p>
                    {Textes}
                </p>
            </div>
            </Fade>

            <div className="sectionNumbers">
            <Fade delay={500}>
                    <CountComp />
            </Fade>
            </div>

            <Zoom delay={700}>
                <div className="sectionBlocks">
                {
                    Blocks.map(function(block, i) {
                        return (
                            <Link to={block.link}>
                            <div className="serviceBlock" onClick={getSubService(block.services)}>
                                <div className="serviceBlockBack" style={{'backgroundImage': `url(${block.image})`,
                                                                            'backgroundSize': `cover`,
                                                                            'backgroundPosition': `center center` 
                                                                        }}>
                                    <div className="serviceBlocktext">
                                        {block.title} <FontAwesomeIcon icon={faPlusCircle} />
                                    </div>
                                </div>
                            </div>
                            </Link>
                        );
                    })
                }

                </div>
            </Zoom>
        </div>
    )
}

export default Servicespage
