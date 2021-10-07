import React, { useState } from 'react';
import ChatComp from './ChatComp';
import Contactpage from './Contactpage';
import DarkbackgroundComp from './DarkbackgroundComp';
import Environnementpage from './Environnementpage';
import FooterComp from './FooterComp';
import HeaderComp from './HeaderComp'
import Homepage from './Homepage';

import Logo from './imgs/gd.png';
import Realisationspage from './Realisationspage';
import Servicespage from './Servicespage';
import SidemenuComp from './SidemenuComp';
import SoumissionComp from './SoumissionComp';

import { Animated } from 'react-animated-css';

import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import { scroller } from "react-scroll";
import { Link } from 'react-router-dom';

function Main() {

    const [openChat, setOpenChat] = useState(false)
    const openchat = () => {
      setOpenChat(!openChat);
      //console.log(openChat);
    } 




    // SIDE MENU
    /* Dark background overlay effect */
    const [darkBack, setDarkBack] = useState(false)
    let darkBackground =       
    <Animated 
    animationIn="fadeIn" 
    animationInDuration={350} 
    isVisible={darkBack}
    >
        <DarkbackgroundComp clickondark={() => {console.log("closeback")}} />
    </Animated>;

    /* Sliding Menu */
    const [sideMenu, setSideMenu] = useState(false)
    const [subServices, setSubServices] = useState(false)
    let sideMenuContent = 
    <Animated 
    animationIn="slideInLeft" 
    animationInDuration={350} 
    isVisible={sideMenu}
    >
        <SidemenuComp 
            offMenuHome={() => {setDarkBack(!darkBack); setSideMenu(!sideMenu); setSubServices(false); window.scrollTo({ top: 0,  behavior: 'smooth', })} } 
            offMenuServices={() => {setDarkBack(!darkBack); setSideMenu(!sideMenu); setSubServices(false); goToServices()} } 
            offMenuRealisations={() => {setDarkBack(!darkBack); setSideMenu(!sideMenu); setSubServices(false); goToRealisations()} } 
            offMenuEnv={() => {setDarkBack(!darkBack); setSideMenu(!sideMenu); setSubServices(false); goToEnv()} } 
            offMenuContact={() => {setDarkBack(!darkBack); setSideMenu(!sideMenu); setSubServices(false); goToContact()} } 
            showServices={() => {setSubServices(!subServices)}} 
            showServicesStatus={subServices}
            clickondark={() => {setDarkBack(false); setSideMenu(false)}} 
            clickedMenu={() => {setDarkBack(false); setSideMenu(false); window.scrollTo(0,0)}}/>
    </Animated>;
    /* Set the state for the sliding Cart */
    const slideMenu = () => {

        setDarkBack(!darkBack)
    
        setSideMenu(!sideMenu)
    } 

    /*  if(sideMenu === true){
        document.body.classList.add('body_lock');
    }else{
        document.body.classList.remove('body_lock'); // 
    }*/

    //SLIDING MENU FUNCTION bug fixed
    let sideslidebug  = 0;
    let slidebug = document.querySelector(".sideside");
    if (darkBack || sideMenu) {
        document.querySelector(".sideside").classList.add('sideslide');
        sideslidebug = 1;
        //document.body.classList.add('body_lock');
        disableBodyScroll(document.querySelector('body'));
    } else {
        enableBodyScroll(document.querySelector('body'));
        //document.body.classList.remove('body_lock');
        //document.querySelector(".sideside").classList.remove('sideslide');   
        if(sideslidebug === 0) {   
        if (slidebug !== null) {
            document.querySelector(".sideside").classList.remove('sideslide');
        }
        }
        

    }
    // END SIDE MENU



    // SMOOTH SCROLL
    const goToContact = () => {
        scroller.scrollTo("contactPage", {
          duration: 4000,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

      const goToServices = () => {
        scroller.scrollTo("servicesPage", {
          duration: 4000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -250,
        });
      };

      const goToRealisations = () => {
        scroller.scrollTo("realisationsPage", {
          duration: 4000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -250,
        });
      };

      const goToEnv = () => {
        scroller.scrollTo("environnementPage", {
          duration: 4000,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -250,
        });
      };


    return (
        <div className="mainComponent">

            <div style={{zIndex: '300'}} className="sideside">
                {darkBack && darkBackground}
                {sideMenu && sideMenuContent}
            </div> 

            <HeaderComp logo={Logo}
                slideMenu={slideMenu}
                iconMenu={sideMenu ? true : false}  
            />

            <Homepage homeActionButton={goToServices} />

            <Servicespage />

            <Realisationspage />

            <Environnementpage contactActionButton={goToContact} />

            <Contactpage/>

            <FooterComp />

            <ChatComp openchat={openchat} openChatStatus={openChat} />
            
            <Link to="/soumission">
                <SoumissionComp />
            </Link>
        </div>
    )
}

export default Main
