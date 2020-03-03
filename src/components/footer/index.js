import React from "react"
import "./styles.scss"
import scrollToSectionHandler  from "../../utils/scrollToSectionHandler"

export default () =>  (
    <section className="footer section has-background-grey-dark	has-text-white">
           <div className="columns">
               <div className="column">
                    <h4 className="title is-4 is-spaced">democraciaOS</h4>
                    <p className="subtitle is-hidden-desktop">La tecnología avanza y cambia nuestras vidas. Es el momento del sistema político de abrirse al diálogo con la participación ciudadana.</p>
                    <p className="is-size-7 is-hidden-touch">Democracia OS es un proyecto de <a className="has-text-underline" href="https://democraciaenred.org/" target="_blank">Democracia en Red</a>, una ONG con base en Buenos Aires, Argentina.</p>
               </div>
               <div className="column">
                   <ul>
                        <li><a className="footer-link" href="#productos" data-target="productos" onClick={scrollToSectionHandler}>productos</a></li>
                        <li><a className="footer-link" href="#nosotros" data-target="nosotros" onClick={scrollToSectionHandler}>nosotros</a></li>
                        <li><a className="footer-link" href="https://preguntarparaacordar.typeform.com/to/bkXtFW" target="_blank">contratar</a></li>
                        <li className="footer-link has-text-underline"><a href="mailto:speak@democracyos.org">speak@democracyos.org</a></li>
                        <li>
                            <a href="https://www.facebook.com/democraciaenred/" target="_blank">
                                <span className="icon">
                                    <i className="fas fab fa-facebook-square"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/fundacionDER" target="_blank">
                                <span className="icon">
                                    <i className="fas fab fa-twitter"></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/democraciaenred/" target="_blank">
                                <span className="icon">
                                    <i className="fas fab fa-instagram"></i>
                                </span>
                            </a>
                            <a href="https://github.com/democraciaenred" target="_blank">
                                <span className="icon">
                                    <i className="fas fab fa-github"></i>
                                </span>
                            </a>
                        </li>
                   </ul>
                </div>
                <div className="column">
                    <p className="is-size-7 is-hidden-desktop">Democracia OS es un proyecto de <a className="has-text-underline" href="https://democraciaenred.org/" target="_blank">Democracia en Red</a>, una ONG con base en Buenos Aires, Argentina.</p>
                    <p className="subtitle is-hidden-touch">La tecnología avanza y cambia nuestras vidas. Es el momento del sistema político de abrirse al diálogo con la participación ciudadana.</p>
                </div>
           </div>   
    </section>
)