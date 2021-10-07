import React from 'react'
//import { Link } from 'react-router-dom'

function SidemenuComp({ offMenuHome, offMenuServices, offMenuRealisations, offMenuEnv, offMenuContact, showServices, showServicesStatus, clickondark }) {
    return (
        <div className="sideMenuContainer">
            
            

            <div className="menuContainer">


                <article className="noItem">
                    <article style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenuHome} to="/">
                    <span className="link">ACCUEIL</span>
                    </article>
                </article>

                {/* Sous menu elements (texte a supprimmer) l'option ne sera pas utilisee.
                    mais le code est preserve au cas ou.
                <article className="noItem" onClick={showServices}>
                    
                    Conception
                    
                </article>
                    
                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} 
                              to={{
                                pathname: "/services",
                                state: data 
                              }}
                        >
                            IMPRESSION NUMERIQUE <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            IMPRESSION OFFSET  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            GRAND FORMAT  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            CONCEPTION GRAPHIQUE  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            PUBLI POSTAGE  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            SACS <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            PACKAGING  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            FINITION  <span className="arrow">&#8250;</span>
                        </Link>
                    </article>

                    <article className="subItem" style={{display: showServicesStatus ? 'block' : 'none'}}>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenu} to="/services">
                            ETIQUETTES <span className="arrow">&#8250;</span>
                        </Link>
                    </article>*/}

                <article className="noItem">
                    <article style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenuServices} to="/services">
                        SERVICES
                    </article>
                </article>


                <article className="noItem">
                    <article style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenuRealisations} to="/realisations">
                        RÉALISATIONS
                    </article>
                </article>

                {/*<article className="noItem">
                    Finission
                </article>*/}

                <article className="noItem">
                    <article style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenuEnv} to="/env">
                        ENVIRONNEMENT
                    </article>
                </article>

                <article className="noItem">
                    <article style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={offMenuContact} to="/contact">
                        CONTACT
                    </article>
                </article>
            </div>


            <div className="shadowOverlay" onClick={clickondark}></div>

        </div>
    )
}

export default SidemenuComp
