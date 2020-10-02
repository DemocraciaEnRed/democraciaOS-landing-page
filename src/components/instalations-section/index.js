import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"
//import { ReactTypeformEmbed } from 'react-typeform-embed';

import diy from "./assets/diy.svg"
import standard from "./assets/standard.svg"
import custom from "./assets/custom.svg"

const icons = {
    diy,
    custom,
    standard
};

export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="implementar" className="section instalations">
            <div className="container has-text-centered">
                    <h3 className="main-title title is-4 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
                    <div className="columns has-text-left">
                        {data.instalations.map((instalation, index) => 
                            <div key={index} className="column">
                                <figure className="image">
                                    <img src={`${icons[instalation.icon]}`} className={`${instalation.icon}`} alt=""/>
                                </figure>
                                <div className="text-wrapper">
                                    <h4 className="title is-4 is-spaced">{intl.formatMessage({ id: instalation.title})}</h4>
                                    <p className="subtitle is-6 is-spaced">{intl.formatMessage({ id: instalation.description})}</p>
                                </div>
                                <div className="list-wrapper">
                                    <span className="list-title">{intl.formatMessage({ id: "requirements" })}</span>
                                    <ul className="list">
                                        {instalation.requirements.map((requirement, index) =>
                                            <li key={index}>{intl.formatMessage({ id: requirement })}</li>
                                        )}
                                    </ul>
                                </div>
                                <a className="button is-rounded is-medium is-dark" href={instalation.button_link} target="_blank" rel="noopener noreferrer">{intl.formatMessage({ id: instalation.button_text})}</a>
                            </div>
                        )}
                    </div>
                

                    {/* <div className="">
                <ReactTypeformEmbed popup={false} url="https://form.typeform.com/to/bkXtFW" />
                </div> */}
            </div>
            </section>

            
        )
}