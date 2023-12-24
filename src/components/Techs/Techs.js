import React from 'react'
import './Techs.css'
import MainTitle from '../MainTitle/MainTitle'

const Techs = () => {
    return (
        <div className="techs">
            <div className="techs__container_main">
                <MainTitle title="Технологии" />
                <div className="techs__container">
                    <h1 className="techs__container_title_main">7 технологий</h1>
                    <p className="techs__container_text">
                        На курсе веб-разработки мы освоили технологии, которые применили<br/>
                        в дипломном проекте.
                    </p>
                    <ul className="techs__list">
                        <li className="techs__list_item">HTML</li>
                        <li className="techs__list_item">CSS</li>
                        <li className="techs__list_item">JS</li>
                        <li className="techs__list_item">React</li>
                        <li className="techs__list_item">Git</li>
                        <li className="techs__list_item">Express.js</li>
                        <li className="techs__list_item">mongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Techs
