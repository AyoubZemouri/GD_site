import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function rea7() {

    const reaImages = [
        "../imgs/rea6.jpg" ,
      ];

    return (
        <div className="reapage">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
            <div className="iconClose">
            <FontAwesomeIcon 
                icon={faTimes}
                
                />
            </div>
            </Link>

            <div className="reaslide">
                <article className="left">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/rea6">
                    <section>
                    <FontAwesomeIcon 
                    icon={faAngleLeft}/>
                    </section>
                    </Link>
                </article>

                <article className="middle" style={{'backgroundImage': `url(${reaImages[0]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>

                </article>

                <article className="right">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/rea8">
                    <section>
                    <FontAwesomeIcon 
                    icon={faAngleRight}/>
                    </section>
                    </Link>
                </article>
            </div>


            <div className="content">
                    <article class="title">
                        NOM DU PROJET, NOM DU CLIENT
                    </article>

                    <article className="text">
                        Description des procédés d'impression utilisés.<br/>
                        Type de papier et finition.
                    </article>
            </div>

        </div>
    )
}

export default rea7
