import React from 'react'
import SliderComp from './SliderComp'

import { Fade } from "react-awesome-reveal";

import ButtonComp from './ButtonComp';

const Textes = [
    "Chez Graphiscan, nous croyons que l’ouverture d’esprit est le point de départ des grandes aventures humaines, esthétiques et graphiques. Ouverts sur le monde et à l’écoute de vos besoins, nous allons chercher les meilleurs équipements et traquons les dernières tendances issues du monde des communications graphiques. L’imagination créative nous pousse au dépassement de soi. Nous n’hésitons pas à explorer de nouvelles avenues pour exprimer au mieux vos idées." ,
    "Nous croyons à l’importance de la proximité dans les rapports humains. Elle donne accès à une meilleure compréhension de l’autre et de ses besoins, elle transcende les clivages pour permettre la coopération dans une atmosphère conviviale. Notre culture repose sur un service attentionné, sur mesure et sur le respect de nos engagements. Graphiscan est l’entreprise de communication graphique la mieux placée pour épauler ceux qui ont des idées à véhiculer." ,
  ];

function Homepage({homeActionButton}) {
    return (
        <div className="homePage">
            <Fade delay={1000}>
                <SliderComp /> 
            </Fade >

            
                <div className="homeText">
                    <Fade delay={300}>
                    <div className="titles">
                        <article className="red"><span> IMPRESSION</span></article>
                        <article className="blue"><span> ÉMOTION</span></article>
                        <article className="yellow"><span> EXPRESSION</span></article>
                    </div>
                    </Fade>

                    <Fade delay={700}>
                        <div className="textes">
                            {
                                Textes.map(val=>(
                                    <p>
                                        {val}
                                    </p>
                                ))
                            }

                            <ButtonComp buttonAction={homeActionButton} buttonText="DÉCOUVREZ NOS SERVICES" />
                        </div>
                    </Fade>
                </div>
            


        </div>
    )
}

export default Homepage
