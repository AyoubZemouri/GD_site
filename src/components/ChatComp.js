import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";

function ChatComp({ openchat, openChatStatus }) {

    const Images = [
        "http://dzpro.net/apps/docs/pngfind.com-chat-png-3090945.png" ,
      ];

    return (
        <>
            <div className="chatbubble">



            <div style={{display: openChatStatus ? 'block' : 'none'}}>
                    <Fade delay={0} duration={100} top>
                        <article className="chatsection">
                            <article className="top">
                                <section className="close" onClick={openchat}>X</section>
                                LAISSEZ NOUS UN MESSAGE
                            </article>
                            <article className="msgs">
                                {/*<section className="msg">Bonjour !</section>*/}
                                <form>
                                    <input type="text" name="nom" placeholder="Nom complet"/>
                                    <input type="text" name="email" placeholder="Adresse courriel"/>
                                    <input type="text" name="tel" placeholder="Téléphone"/>
                                    <textarea name="message" placeholder="Votre message..."></textarea>

                                    <button className="contactSend">ENVOYER</button>
                                </form>
                            </article>
                        </article>            
                    </Fade>
                </div>



                <div>
                    <Slide delay={2000} direction="right">
                        <article className="chaticon" onClick={openchat} style={{display: openChatStatus ? 'none' : 'block'}} >
                            {/*openChatStatus ? '...' : '...'*/}  
                            <img src={Images[0]} alt=""/>
                        </article>            
                    </Slide>
                </div>
                
            </div>
        </>
    )
}

export default ChatComp
