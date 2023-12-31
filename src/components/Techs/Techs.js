import React from 'react'
import './Techs.css'
import MainTitle from '../MainTitle/MainTitle'

const Techs = () => {
    return (
        <div className="techs">
            <header className='aboutproject__header'>
                <div className='techs__space techs__space_header_top' />
                <MainTitle title="Технологии" />
            </header>

            <main className="techs__main">
                <section className="techs__container_main">
                    <div className='techs__space techs__space_main_top' />
                    <h1 className="techs__title">7 технологий</h1>
                    <p className="techs__text">
                        На курсе веб-разработки мы освоили технологии, которые применили
                        в дипломном проекте.
                    </p>
                    <div className='techs__space techs__space_main_list' />
                    <ul className="techs__list">
                        <li className="techs__list_item">HTML</li>
                        <li className="techs__list_item">CSS</li>
                        <li className="techs__list_item">JS</li>
                        <li className="techs__list_item">React</li>
                        <li className="techs__list_item">Git</li>
                        <li className="techs__list_item">Express.js</li>
                        <li className="techs__list_item">mongoDB</li>
                    </ul>
                    <div className='techs__space techs__space_main_bottom' />
                </section>
            </main>
        </div>
    )
};

export default Techs
