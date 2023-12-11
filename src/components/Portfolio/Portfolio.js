import React from 'react'
import './Portfolio.css'

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <div className="portfolio__line">
                <h1 className="portfolio__title">
                    {props.title}
                </h1>
                <a className="portfolio__link" href={props.link}></a>
            </div>
            <div className="portfoli__underline"></div>
        </div>
    )
};

export default Portfolio
