import React from 'react'
//import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";

function SoumissionComp() {
    return (
        <>
        <div className="soumission">
            <Slide delay={2500} direction="up">
            {/*<img src="http://dzpro.net/apps/docs/soum.png" alt=""/>*/}

                <article className="soumissionButton">SOUMISSION EN LIGNE</article>

            {/*<article className="submissionTitle"></article>
            <article className="submissionContent"></article>*/}
            </Slide>
        </div>
        </>
    )
}

export default SoumissionComp
