import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function HeaderComp({logo, slideMenu, iconMenu }) {

    const Images = [
        "http://dzpro.net/apps/docs/LI.png" ,
        "http://dzpro.net/apps/docs/YT.png" ,
      ];

    return (
        <header>
            <div className="header" >
                <nav className="menu">
                    <span className="theIcon">
                        <FontAwesomeIcon 
                            icon={ iconMenu ? faTimes : faBars }
                            onClick={slideMenu}
                        />
                    </span>
                </nav>          


                <section className="logo">
                    <img src={logo} alt="" onClick={() => {window.scrollTo({ top: 0,  behavior: 'smooth', })}} />
                </section>

                <section className="cartIcon">
                    <span className="theIcon">
            

                        <span className="iconCont">
                            <img className="img1" src={Images[1]} alt="YT"/>
                        </span>

                        

                        <span className="iconCont">
                            <img className="img2" src={Images[0]} alt="LI"/>
                        </span>
                        &nbsp;&nbsp;
    
                    </span>
                </section>
            </div>
        </header>
    )
}

export default HeaderComp
