import React from 'react'
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-awesome-reveal";

function SliderComp() {

    const slideImages = [
        "http://dzpro.net/apps/docs/slide1.png" ,
        "http://dzpro.net/apps/docs/productionID_3936483.gif" ,
        "http://dzpro.net/apps/docs/PexelVideos2625.gif" ,
        "http://dzpro.net/apps/docs/slide4.png" ,
        "http://dzpro.net/apps/docs/andrej-lisakov-V2OyJtFqEtY-unsplash.jpg",
        "http://dzpro.net/apps/docs/charisse-kenion-hd41GESb3ZY-unsplash.jpg",
        "http://dzpro.net/apps/docs/slide2.png" ,
        "http://dzpro.net/apps/docs/slide3.png" ,
      ];

      //const SliderProperties = {
      //  duration: 3000,
      //  arrows: false,
      //  autoplay: false,
      //};

    return (
        <div className="slide-container">
        {/*<Slide {...SliderProperties}>*/}
            {/*<div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[3]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>

            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[6]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>

            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[7]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>

            
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[5]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>*/}
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`, 'backgroundSize': `cover`, 'backgroundPosition': `center bottom` }}>
                <span></span>
                </div>
            </div>
            

            {/*</Slide>*/}

            <Fade delay={1500}>
            <div className="slogan">
                <h1>SOUTIENT L’EXPRESSION GRAPHIQUE DE VOTRE ENTREPRISE EN IMPRIMANT VOS IDÉES</h1>
            </div>
            </Fade>
        </div>
    )
}

export default SliderComp
