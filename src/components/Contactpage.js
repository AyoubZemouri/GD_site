import React from 'react'
import { Fade } from "react-awesome-reveal";

function Contactpage() {
    return (
        <div className="contactPage">
            <Fade delay={300}>
                <div className="sectionTitle">
                    CONTACT
                </div>

                <div className="locations">

                    <article className="location">
                        <section className="title">
                            ALMA
                        </section>
                        <section className="adress">
                            <a style={{ color: 'inherit', textDecoration: 'inherit'}} 
                            target="_blank" href="https://goo.gl/maps/HEWEZjpQiR46Mtom6">
                                1430, boul. Saint‑Jude Sud Alma (Québec) G8B 3L4
                            </a>
                        </section>
                        <section className="tel">
                            T 418 662.5476
                        </section>
                    </article>

                    <article className="location">
                        <section className="title">
                            LONGUEUIL
                        </section>
                        <section className="adress">
                            <a style={{ color: 'inherit', textDecoration: 'inherit'}} 
                            target="_blank" href="https://goo.gl/maps/m7jcG1ehuBu8ymgG7">
                            2751, boul. Jacques‑Cartier Est Longueuil (Québec) J4N 1L7
                            </a>
                        </section>
                        <section className="tel">
                            T 450 670.9222
                        </section>
                    </article>

                    <article className="location">
                        <section className="title">
                            MONTRÉAL
                        </section>
                        <section className="adress">
                            <a style={{ color: 'inherit', textDecoration: 'inherit'}} 
                            target="_blank" href="https://goo.gl/maps/G9d9MiL4QFjtxLdM8">
                            6600, Saint-Urbain, suite 102 Montréal (Québec) H2S 3G8
                            </a>
                        </section>
                        <section className="tel">
                            T 514 277.6022
                        </section>
                    </article>

                </div>
            </Fade>
        </div>
    )
}

export default Contactpage
