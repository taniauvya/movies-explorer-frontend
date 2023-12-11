import React from 'react'
import './Techs.css'
import MainTitle from '../MainTitle/MainTitle'

const Techs = () => {
    return (
        <div className="techs">
            <MainTitle title = "Технологии" />
            <div className="techs__container">
                <h1 className="techs__container_title_main">7 технологий</h1>
                <p className="techs__container_text">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="techs__list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Express.js</li>
                    <li>mongoDB</li>
                </ul>
            </div>
        </div>
    )
};

export default Techs
