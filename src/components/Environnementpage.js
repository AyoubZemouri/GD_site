import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal";
import ButtonComp from './ButtonComp';

function Environnementpage({contactActionButton}) {
    
    const Images = [
        "../imgs/env1.png" ,
        "../imgs/env2.png" ,
        "../imgs/env3.png" ,
      ];
    
    return (
        <div className="environnementPage">
            <div className="evnContainer">
                <Fade delay={300}>
                    <div className="sectionTitle">
                        ENVIRONNEMENT
                    </div>

                    <p>
                    Graphiscan a une volonté de réduire les impacts environnementaux liés aux activités de l’imprimerie.
                    </p>

                    <div className="certif">
                        <span className="title"> 
                            Nous sommes certifiés FSC ® — FOREST STEWARDSHIP COUNCIL ®
                        </span>
                        <span className="content">
                            La certification de la gestion forestière garantit au public que les produits du bois
                            proviennent d’une forêt gérée de manière durable et responsable.
                        </span>
                    </div>

                    <div className="saviezvous">
                        <span className="title"> 
                            SAVIEZ-VOUS QUE…
                        </span>

                        <div className="facts">

                            <article className="fact">
                                <section className="img">
                                    <img className="imgfact" src={Images[0]} alt=""/>
                                </section>
                                <section className="text">
                                    Graphiscan utilise des encres végétales
                                </section>
                            </article>

                            <article className="fact center">
                                <section className="img">
                                    <img className="imgfact" src={Images[1]} alt=""/>
                                </section>
                                <section className="text">
                                    Graphiscan encourage l’utilisation de papier nord-américain, ce qui diminue notre empreinte carbone
                                </section>
                            </article>

                            <article className="fact">
                                <section className="img">
                                    <img className="imgfact" src={Images[2]} alt=""/>
                                </section>
                                <section className="text">
                                    Graphiscan recycle 50 tonnes de papier par mois
                                </section>
                            </article>

                        </div>

                    </div>
    
                </Fade>

                <div className="callToAction">    
                    <Zoom delay={500}>
                        <ButtonComp buttonAction={contactActionButton} buttonText="CONTACTEZ-NOUS" />
                    </Zoom>
                </div>

            </div>
        </div>
    )
}

export default Environnementpage
